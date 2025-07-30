import { useEffect, useState } from "react";
import { Container } from "../ui/container";

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const info = [
    {
      index: 1,
      title: "3-Week Hackathon",
      description:
        "Not your average hackathon dive into hands-on pre-workshops and build real-world Solana projects from scratch in just 3 weeks.",
    },
    {
      index: 2,
      title: "700+ Brilliant Students",
      description:
        "Join a powerful wave of builders from over 6 leading universities across Nigeria.",
    },
    {
      index: 3,
      title: "Amazing Prizes",
      description: "Dev kits, merch, swag, mentorship, and cash prizes for winners.",
    },
  ];

  // handling mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < info.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === info.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [info.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Container className="info-section pt-3 pb-10 md:py-10" as="section" id="about">
      <div className="hidden md:flex md:items-stretch md:gap-5">
        {info.map((item, index) => (
          <div
            data-animate-scale
            data-delay={index / 10}
            data-easing="CTA.button"
            key={item.index}
            className="relative w-full max-w-md rounded-4xl bg-transparent p-0.5 text-center text-white backdrop-blur-[100px]"
            style={{
              background:
                "conic-gradient(from 175.57deg at 50% 50%, #2B71F8 0deg, #FFFFFF 166.1deg, #2B71F8 360deg)",
            }}
          >
            <div className="h-full w-full rounded-4xl bg-black">
              <div className="flex h-full w-full items-center justify-center p-8">
                <div className="flex flex-col items-center text-center text-white">
                  <div
                    data-animate-y-up
                    data-delay={index / 3 + 0.3}
                    className="mb-4 text-2xl font-medium"
                  >
                    {item.title}
                  </div>
                  <div
                    data-animate-sentences
                    data-delay={index / 3 + 0.5}
                    className="text-base leading-relaxed font-normal"
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Carousel for mobile*/}
      <div className="md:hidden">
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {info.map((item, index) => (
              <div key={item.index} className="w-full flex-shrink-0 px-4">
                <div
                  className="relative mx-auto max-w-sm rounded-3xl bg-transparent p-0.5 text-center text-white backdrop-blur-[100px]"
                  style={{
                    background:
                      "conic-gradient(from 175.57deg at 50% 50%, #2B71F8 0deg, #FFFFFF 166.1deg, #2B71F8 360deg)",
                  }}
                >
                  <div className="h-full w-full rounded-3xl bg-black">
                    <div className="flex h-full w-full items-center justify-center p-6 sm:p-8">
                      <div className="text-center text-white">
                        <div className="mb-4 text-xl font-medium sm:text-2xl">{item.title}</div>
                        <div className="text-sm leading-relaxed font-normal sm:text-base">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {info.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-blue-400" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Info;
