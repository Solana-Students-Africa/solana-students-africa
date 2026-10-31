// Web-sized copies of the SSA 2025 summit photos (originals live in /images/SSA2025).
// "-lg" is 1600px wide, "-sm" is 640px wide.
export const SUMMIT_PHOTOS = [
  "dsc07959",
  "dsc08554",
  "dsc08597",
  "dsc08705",
  "dsc08766",
  "dsc08925",
  "dsc08928",
  "dsc09147",
  "dsc09172",
  "dsc09248",
  "dsc07959-transparent",
] as const;

const PNG_PHOTOS = new Set<SummitPhoto>(["dsc07959-transparent"]);

export type SummitPhoto = (typeof SUMMIT_PHOTOS)[number];

export const photo = (name: SummitPhoto, size: "sm" | "lg" = "lg") =>
  `/images/SSA2025/web/${name}-${size}.${PNG_PHOTOS.has(name) ? "png" : "jpg"}`;
