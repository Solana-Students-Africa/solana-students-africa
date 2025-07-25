import Component from "@/animations/classes/Component";
import GSAPAnimations from "@/animations/classes/Gsap";
import "@/animations/styles/animation.css";
import { EasingFunction } from "@/animations/types/gsap";
import CustomEase from "@/animations/utils/CustomEase";
import getEasingFunction from "@/animations/utils/getEasing";
import { calculateSentences, formatAndSplitText } from "@/animations/utils/text";

type Easings = Record<string, EasingFunction | Record<string, EasingFunction>>;

type AnimationRegistry = Record<string, (element: HTMLElement) => void>;
type AnimationBaseInputs = {
  sourceElements: string | HTMLElement | (string | HTMLElement)[];
  easings?: Easings;
};

/**
 * Base class for animations.
 * @extends {Component}
 */

export default class AnimationBase extends Component {
  protected readonly easings: Easings = {
    SCALE: CustomEase.create("scale", "M0,0 C0.59,0 0,1 1,1"),
    DEFAULT: CustomEase.create("default_custom", "M0,0 C0.15,0 0,1 1,1"),
  };

  private sourceElements: HTMLElement[] = [];
  private observers: IntersectionObserver[] = [];

  private animationRegistry: AnimationRegistry = {
    text: this.animateText,
    "y-up": this.animateYUp,
    scale: this.animateScale,
    fadein: this.animateFadeIn,
    sentences: this.animateSentences,
    "fadein-left": this.animateFadeInLeft,
    "fadein-right": this.animateFadeInRight,
    "driftin-right": this.animateDriftInRight,
    "sentences-out": this.animateSentencesOut,
    "grow-width": this.animateGrowWidth,
    "spinin-right": this.animateSpinInRight,
    "spinin-left": this.animateSpinInLeft,

    // Add More base animations here
  };

  constructor(
    input: AnimationBaseInputs,
    protected readonly animationLibrary: GSAPAnimations = new GSAPAnimations()
  ) {
    const primaryElement = Array.isArray(input.sourceElements)
      ? input.sourceElements[0]
      : input.sourceElements;

    super({
      element: primaryElement,
      elements: {
        animateFadeIn: "[data-animate-fadein]",
        animateScale: "[data-animate-scale]",
        animateYUp: "[data-animate-y-up]",
        animateText: "[data-animate-text]",
        growWidth: "[data-animate-grow-width]",
        animateSentences: "[data-animate-sentences]",
        animateFadeInLeft: "[data-animate-fadein-left]",
        animateFadeInRight: "[data-animate-fadein-right]",
        animateDriftInRight: "[data-animate-driftin-right]",
        animateSentencesOut: "[data-animate-sentences-out]",
        animateSpinInLeft: "[data-animate-spinin-left]",
        animateSpinInRight: "[data-animate-spinin-right]",
        animationChangeTrigger: "[data-trigger-animation-change]",
        contentChangeTrigger: "[data-trigger-content-change]",
      },
    });

    if (input.easings) {
      this.easings = { ...this.easings, ...input.easings };
    }

    // Process source elements
    this.processSourceElements(input.sourceElements);
    this.init();
  }

  private processSourceElements(sourceElements: string | HTMLElement | (string | HTMLElement)[]) {
    const elements = Array.isArray(sourceElements) ? sourceElements : [sourceElements];

    this.sourceElements = elements
      .map((element) => {
        if (typeof element === "string") {
          const found = document.querySelector(element) as HTMLElement;
          if (!found) {
            console.warn(`Element not found: ${element}`);
          }
          return found;
        }
        return element;
      })
      .filter(Boolean);
  }

  init() {
    this.setupBaseAnimationStageForAll();
    this.observeElementChangeForAll();
    this.observeAnimationChangeForAll();
    this.createIntersectionObservers();
  }

  private createIntersectionObservers() {
    this.sourceElements.forEach((sourceElement) => {
      if (!sourceElement) return;

      const observer = this.createObserverForElement(sourceElement);
      observer.observe(sourceElement);
      this.observers.push(observer);
    });
  }

  private createObserverForElement(sourceElement: HTMLElement): IntersectionObserver {
    const func = (observer: IntersectionObserver) => {
      this.triggerAnimationsForElement(sourceElement);
      observer.unobserve(sourceElement);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.some((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;

            const isShorterThanScreen = section.clientHeight * 0.3 <= window.innerHeight;

            if (isShorterThanScreen && entry.intersectionRatio >= 0.3) {
              func(observer);
            } else if (!isShorterThanScreen && entry.intersectionRatio >= 0.1) {
              func(observer);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.1, 0.3],
      }
    );

    return observer;
  }

  private triggerAnimationsForElement(sourceElement: HTMLElement) {
    // Find all animatable elements within this specific source element
    const animatableElements = this.findAnimatableElementsInSource(sourceElement);

    animatableElements.forEach((element) => {
      this.triggerElementAnimation(element);
    });
  }

  private findAnimatableElementsInSource(sourceElement: HTMLElement): HTMLElement[] {
    const selectors = [
      "[data-animate-fadein]",
      "[data-animate-scale]",
      "[data-animate-y-up]",
      "[data-animate-text]",
      "[data-animate-grow-width]",
      "[data-animate-sentences]",
      "[data-animate-fadein-left]",
      "[data-animate-fadein-right]",
      "[data-animate-driftin-right]",
      "[data-animate-sentences-out]",
      "[data-animate-spinin-left]",
      "[data-animate-spinin-right]",
    ];

    const elements: HTMLElement[] = [];

    selectors.forEach((selector) => {
      const found = sourceElement.querySelectorAll(selector);
      elements.push(...(Array.from(found) as HTMLElement[]));
    });

    return elements;
  }

  private setupBaseAnimationStageForAll() {
    this.sourceElements.forEach((sourceElement) => {
      if (!sourceElement) return;
      this.setupBaseAnimationStageForElement(sourceElement);
    });
  }

  private setupBaseAnimationStageForElement(sourceElement: HTMLElement) {
    const animateYUp = sourceElement.querySelectorAll("[data-animate-y-up]");
    const animateText = sourceElement.querySelectorAll("[data-animate-text]");
    const animateSentences = sourceElement.querySelectorAll("[data-animate-sentences]");

    if (animateYUp.length > 0) {
      animateYUp.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const wrapper = document.createElement("span");

        // Get computed styles for margin and padding
        const computedStyle = window.getComputedStyle(htmlElement);
        const margin = `${computedStyle.marginTop} ${computedStyle.marginRight} ${computedStyle.marginBottom} ${computedStyle.marginLeft}`;
        const padding = `${computedStyle.paddingTop} ${computedStyle.paddingRight} ${computedStyle.paddingBottom} ${computedStyle.paddingLeft}`;

        // Apply margin and padding to the wrapper
        wrapper.style.display = "flex";
        wrapper.style.overflow = "hidden";
        wrapper.style.height = `${htmlElement.offsetHeight}px`;
        wrapper.style.margin = margin;
        wrapper.style.padding = padding;

        // Remove margin and padding from the element
        htmlElement.style.margin = "0";
        htmlElement.style.padding = "0";

        if (htmlElement.parentNode) {
          htmlElement.parentNode.insertBefore(wrapper, htmlElement);
        }

        wrapper.appendChild(htmlElement);
      });
    }

    if (animateText.length > 0) {
      const elements = this.normalizeToElements(animateText);

      elements.forEach((element) => {
        formatAndSplitText(element as HTMLElement);

        formatAndSplitText(element as HTMLElement);
      });
    }

    if (animateSentences.length > 0) {
      const elements = this.normalizeToElements(animateSentences);

      elements.forEach((element) => {
        formatAndSplitText(element as HTMLElement);

        formatAndSplitText(element as HTMLElement);
      });
    }
  }

  private observeElementChangeForAll() {
    this.sourceElements.forEach((sourceElement) => {
      if (!sourceElement) return;
      this.observeElementChangeForElement(sourceElement);
    });
  }

  private observeElementChangeForElement(sourceElement: HTMLElement) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        const textNode = mutation.target as Text;
        let parentSection = textNode.parentElement;

        if (!parentSection) return;

        if (parentSection.dataset.triggerContentChange === undefined)
          parentSection = parentSection.closest("[data-trigger-content-change]");

        parentSection && this.triggerElementAnimation(parentSection);
      }
    });

    const mutationObserverConfig = {
      subtree: true,
      characterData: true,
    };

    const contentChangeTriggers = sourceElement.querySelectorAll("[data-trigger-content-change]");

    contentChangeTriggers.forEach((element) => {
      observer.observe(element, mutationObserverConfig);
    });
  }

  private observeAnimationChangeForAll() {
    this.sourceElements.forEach((sourceElement) => {
      if (!sourceElement) return;
      this.observeAnimationChangeForElement(sourceElement);
    });
  }

  private observeAnimationChangeForElement(sourceElement: HTMLElement) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        const textNode = mutation.target as HTMLElement;
        textNode && this.triggerElementAnimation(textNode);
      }
    });

    const mutationObserverConfig = {
      attributes: true,
      attributeFilter: ["data-animate-sentences", "data-animate-sentences-out"],
    };

    const animationChangeTriggers = sourceElement.querySelectorAll(
      "[data-trigger-animation-change]"
    );

    animationChangeTriggers.forEach((element) => {
      observer.observe(element, mutationObserverConfig);
    });
  }

  registerAnimations(animation?: AnimationRegistry) {
    this.animationRegistry = { ...this.animationRegistry, ...animation };
  }

  private animate(element: HTMLElement, animation: string) {
    const animationFunction = this.animationRegistry[animation];

    if (animationFunction) {
      animationFunction.call(this, element);
    } else {
      console.error(`No animation function registered for "${animation}"`);
    }
  }

  protected triggerElementAnimation(el: HTMLElement) {
    if (el instanceof NodeList) {
      el.forEach((el2) => this.triggerElementAnimation(el2 as HTMLElement));
    }

    const dataset = el.dataset;

    for (const key in dataset) {
      if (key.startsWith("animate") && dataset[key] === "true") {
        const animationName = this.extractAnimationNameFromDataset(key);
        animationName && this.animate(el, animationName);
      }
    }
  }

  // Cleanup method to remove observers
  destroy() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }

  // All your existing animation methods remain the same...
  private animateFadeIn(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateFadeIn({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  private animateScale(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateScale({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  private animateYUp(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.animateYUp({
      delay,
      duration,
      element,
      ease: easing,
    });
  }

  private animateText(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    const words = element.querySelectorAll("span");
    const stagger = Number(element.dataset.stagger) || 0.084;

    element.style.opacity = "1";

    words.forEach((sentence, index) => {
      this.animationLibrary.animateYUp({
        element: sentence,
        duration,
        ease: easing,
        delay: delay + stagger * index,
      });
    });
  }

  private animateSentences(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);
    const allWords = element.querySelectorAll("span span");

    const words = calculateSentences(allWords);
    const stagger = Number(element.dataset.stagger) || 0.084;

    element.style.opacity = "1";

    words.forEach((sentence, index) => {
      this.animationLibrary.animateYUp({
        element: sentence,
        duration,
        ease: easing,
        delay: delay + stagger * index,
      });
    });
  }

  private animateFadeInLeft(element: HTMLElement): void {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.core.fromTo(
      element,
      { transform: "translateX(-100vw)" },
      {
        transform: "translateX(0)",
        opacity: 1,
        duration,
        delay,
        ease: easing,
      }
    );
  }

  private animateFadeInRight(element: HTMLElement): void {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.core.fromTo(
      element,
      { transform: "translateX(100vw)" },
      {
        transform: "translateX(0)",
        opacity: 1,
        duration,
        delay,
        ease: easing,
      }
    );
  }

  private animateSentencesOut(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);

    const words = calculateSentences(element.querySelectorAll("span span"));
    const stagger = Number(element.dataset.stagger) || 0.084;

    element.style.opacity = "1";

    words.forEach((sentence, index) => {
      this.animationLibrary.core.fromTo(
        sentence,
        { yPercent: 0 },
        {
          yPercent: -100,
          opacity: 0,
          duration,
          ease: easing,
          delay: delay - 0.75 + stagger * index,
        }
      );
    });
  }

  private animateDriftInRight(element: HTMLElement): void {
    const { delay, duration, easing } = this.getAnimationValues(element);

    this.animationLibrary.core.fromTo(
      element,
      { xPercent: 25, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration,
        delay,
        ease: easing,
      }
    );
  }

  private animateGrowWidth(element: HTMLElement): void {
    const { delay, duration, easing } = this.getAnimationValues(element);

    element.style.transformOrigin = "center center";
    element.style.display = "inline-block";
    element.style.overflow = "hidden";

    const text = element.querySelector("span");
    if (text instanceof HTMLElement) text.style.opacity = "0";

    const tl = this.animationLibrary.core.timeline();

    tl.fromTo(element, { scaleX: 0 }, { scaleX: 1, duration, delay, ease: easing });

    if (text) {
      tl.to(text, { opacity: 1, duration: duration * 0.5, ease: easing }, `>-=${duration * 0.3}`);
    }
  }

  private animateSpinInRight(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);
    element.style.transformOrigin = "center center";

    this.animationLibrary.core.fromTo(
      element,
      {
        xPercent: 100,
        rotation: 720,
        opacity: 0,
      },
      {
        xPercent: 0,
        rotation: 0,
        opacity: 1,
        duration,
        delay,
        ease: easing,
      }
    );
  }

  private animateSpinInLeft(element: HTMLElement) {
    const { delay, duration, easing } = this.getAnimationValues(element);
    element.style.transformOrigin = "center center";

    this.animationLibrary.core.fromTo(
      element,
      {
        xPercent: -100,
        rotation: -720,
        opacity: 0,
      },
      {
        xPercent: 0,
        rotation: 0,
        opacity: 1,
        duration,
        delay,
        ease: easing,
      }
    );
  }

  // Utility methods remain the same...
  getAnimationValues(element: HTMLElement) {
    const delay = Number(element.dataset.delay) || 0;
    const duration = Number(element.dataset.duration) || 1;
    const datasetEasing = element.dataset.easing as keyof typeof this.easings;

    let easing: EasingFunction = this.easings?.DEFAULT as EasingFunction;

    if (datasetEasing) {
      const easingResult = getEasingFunction(datasetEasing, this.easings);
      const defaultEasing = this.easings?.DEFAULT as EasingFunction;

      easing = typeof easingResult === "function" ? easingResult : defaultEasing;
    }

    return {
      delay,
      easing,
      duration,
    };
  }

  normalizeToElements(input: HTMLElement | Element | NodeList | string[]): HTMLElement[] {
    if (input instanceof NodeList) {
      return Array.from(input) as HTMLElement[];
    }

    return [input] as HTMLElement[];
  }

  extractAnimationNameFromDataset(word: string) {
    if (!word.startsWith("animate")) return;

    const animationName = word
      .replace(/([A-Z])/g, "-$1")
      .replace(/^animate-/, "")
      .toLowerCase();

    return animationName;
  }
}
