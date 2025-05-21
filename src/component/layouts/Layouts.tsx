import styled from "@emotion/styled";
import { css, Global, Theme, useTheme } from "@emotion/react";
import _ from "lodash";
import { ReactNode } from "react";
import { Container } from "../Frame/FrameLayouts";

export const ASPECT_RATIO = {
  widesScreen: { w: 16, h: 9 },
  ultraWideScreen: { w: 21, h: 9 },
  standard: { w: 4, h: 3 },
  surfaceRatio: { w: 3, h: 2 },
  WXGA: { w: 16, h: 10 },
};

export const Unshackled = styled.div<{
  theme: Theme;
  coordinate?: { x: number; y: number };
}>(
  ({ theme, coordinate }) => css`
    z-index: 1;
    position: absolute;
    right: 0;
    top: ${coordinate ? coordinate.y + 300 : 0}px;

    @media ${theme.deviceSize.phone} {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `,
);

/* LIST CONTAINER LAYOUTS -- START */
export function viewSelector<T>(
  theme: Theme,
  windowWidth: number,
  itemWidthList: T[],
  viewLength: number,
  viewPort?: number,
) {
  let width: number;

  if (windowWidth <= theme.windowSize.HD) {
    width = windowWidth - 100;
  } else if (itemWidthList.length > viewLength) {
    width = _.sum(itemWidthList.slice(0, viewLength));
  } else {
    width = viewPort ?? theme.windowSize.HD + 300;
  }
  return width;
}

export const ExhibitionContainer = styled.div<{
  width: number;
  activeScroll: boolean;
}>(
  ({ width, activeScroll }) => css`
    width: ${width}px;
    overflow-x: ${activeScroll ? "scroll" : "hidden"};
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  `,
);

export const ItemContainer = styled(Container)<{
  theme: Theme;
  activeScroll?: boolean;
  gap: number;
}>(
  ({ gap }) => css`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px 0; // 상하 패딩 추가

    box-sizing: border-box;
    position: relative;
    gap: ${gap}px;

    overflow: visible;
  `,
);

export const Item = styled.div<{
  theme: Theme;
  width: number;
  height?: number;
}>(
  ({ theme, width }) => css`
    max-width: ${width}px;
    min-width: ${width}px;
    aspect-ratio: 1/1;
    border-radius: ${theme.borderRadius.roundedBox};
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 0.3s ease-in-out;
    scroll-snap-align: start;
    overflow: hidden;

    &:hover {
      box-shadow: 2px 4px 16px ${theme.mode.contentBackground};
      transform: scale3d(1.02, 1.02, 1.02);
    }

    @keyframes tilt-shaking {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(2deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(-2deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `,
);

export const MainTitleLine = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  font-family: ${theme.mode.font.component.mainTitle};
  }
`,
);

export const MainTitle = styled.h2<{ theme: Theme }>(
  ({ theme }) => css`
    font-family: ${theme.mode.font.component.mainTitle};
    color: ${theme.mode.textPrimary};
    cursor: pointer;
  `,
);

export const ControlBox = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 4px;

    button {
      margin: 0;
      padding: 0;
      width: 45px;
      height: 35px;
      background-position: center;
      transition: background 0.8s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:active {
        background-color: ${theme.mode.buttonHoverBackground};
        background-size: 100%;
        transition: background 0s;
      }
    }
    svg {
      width: 20px;
    }
  `,
);

export const ItemCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const ItemTitle = styled.h4<{ theme: Theme }>(
  ({ theme }) => css`
    color: ${theme.mode.textPrimary};
    text-transform: uppercase;
    font-family: ${theme.mode.font.component.itemTitle};
    margin-top: 10px;
    margin-bottom: 0;
    cursor: pointer;
  `,
);

export const IFrameCase = styled.iframe<{ width: number; height: number }>(
  ({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
    border: none;
  `,
);

/* LIST CONTAINER LAYOUTS -- END */

/* PAGE COMPONENT LAYOUTS -- START */
export const BasicScreen = styled.iframe<{
  size: { width: number; height: number };
}>(
  ({ size }) => css`
    width: ${size.width}px;
    height: ${size.height}px;
    border: none;
  `,
);

/* PAGE COMPONENT LAYOUTS -- END */

// export const SummaryTab = styled.div`
//   background: ${theme.defaultTheme.cardBackground};
//   color: ${theme.defaultTheme.textAccent};
//   width: ${NAVIGATION_SUMMARY_WIDTH}px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-shrink: 0;
//   padding: 0 ${SUMMARY_PADDING_LEFT}px 0 ${SUMMARY_PADDING_RIGHT}px;
//   height: 60px;
// `;

export const ContentsContainer = styled(Container)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SummaryTitle = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    color: ${theme.mode.textPrimary};
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 114.286% */
    white-space: nowrap;
  `,
);

export const Divider = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    width: 1px;
    height: 2.5em;
    background: ${theme.mode.textSecondary};
  `,
);

export function EllipsisCase(props: {
  text: ReactNode;
  testAlign: "center" | "left" | "right";
  className?: string;
  width: number;
  func?: () => void;
}) {
  const { text, className, width, testAlign, func } = props;

  return (
    <TextCase className={className} onClick={func}>
      <Text textAlign={testAlign} width={width}>
        {text}
      </Text>
    </TextCase>
  );
}

export const TextCase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span<{ width?: number; textAlign: string }>(
  ({ width, textAlign }) => css`
    text-align: ${textAlign};
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    width: ${width}vw;
  `,
);

export function GlobalStyled() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        width: 100%;
        position: relative;

        z-index: -1;
        background-color: ${theme.mode.bodyBackground};

        html {
          font-size: 1vw;

          ::-webkit-scrollbar {
            display: none;
          }
        }

        #root {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          ::-webkit-scrollbar {
            display: none;
          }
        }

        :root {
          font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;

          color-scheme: light dark;

          color: ${theme.mode.textPrimary};
          background-color: ${theme.mode.bodyBackground};

          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          margin: 0;
          display: flex;
          place-items: center;
          min-width: 320px;
          min-height: 100vh;
          color: ${theme.mode.textPrimary};
          background-color: ${theme.mode.bodyBackground};
        }

        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          transition: border-color 0.25s;
        }
      `}
    />
  );
}
