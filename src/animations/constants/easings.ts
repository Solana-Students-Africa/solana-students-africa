import CustomEase from "../utils/CustomEase";

export const customEasings = {
  NAVIGATION: {
    header: CustomEase.create("navigation_header", "M0,0 C0.56,0 0,1 1,1"),
    button: CustomEase.create("navigation_button", "M0,0 C0.43,0 0,1 1,1"),
  },

  CTA: {
    text: CustomEase.create("custom", "M0,0 C0.22,0 0,1 1,1"),
    button: CustomEase.create("custom", "M0,0 C0.59,0 0,1 1,1"),
    header: CustomEase.create("custom", "M0,0 C0.15,0 0,1 1,1"),
  },
};
