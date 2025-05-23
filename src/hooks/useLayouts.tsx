import { useTheme } from "@emotion/react";

export function useItemResizing(
  windowWidth: number,
  parentsWidth: number,
  gap: number,
  viewLength: number,
  moveFactor: number,
) {
  const theme = useTheme();

  const isTablet = windowWidth < theme.windowSize.HD;
  const isMobile = windowWidth <= theme.windowSize.tablet;
  const moveParam = isTablet ? 1 : moveFactor;

  const itemWidth =
    (parentsWidth - gap * (isTablet ? 1 : viewLength - 1)) /
    (isTablet ? 1 : viewLength);

  return { itemWidth, isTablet, moveParam, isMobile };
}
