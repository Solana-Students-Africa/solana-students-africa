// Percentages of a leading-none line box; the caps sit roughly 14%-84% of it.
const CUT_1 = [34.5, 39];
const CUT_2 = [59, 63.5];

const mask = (stops: string) => {
  const image = `linear-gradient(to bottom, ${stops})`;
  return { maskImage: image, WebkitMaskImage: image };
};

export const ALL_BANDS = mask(
  `#000 ${CUT_1[0]}%, transparent ${CUT_1[0]}%, transparent ${CUT_1[1]}%, #000 ${CUT_1[1]}%, #000 ${CUT_2[0]}%, transparent ${CUT_2[0]}%, transparent ${CUT_2[1]}%, #000 ${CUT_2[1]}%`
);

export const BANDS = [
  mask(`#000 ${CUT_1[0]}%, transparent ${CUT_1[0]}%`),
  mask(`transparent ${CUT_1[1]}%, #000 ${CUT_1[1]}%, #000 ${CUT_2[0]}%, transparent ${CUT_2[0]}%`),
  mask(`transparent ${CUT_2[1]}%, #000 ${CUT_2[1]}%`),
];
