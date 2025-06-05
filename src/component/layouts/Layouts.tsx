import styled from "@emotion/styled";
import { css, Global, Theme, useTheme } from "@emotion/react";
import { ReactNode } from "react";
import { Container } from "../Frame/FrameLayouts";

export const ASPECT_RATIO = {
  widesScreen: { w: 16, h: 9 },
  ultraWideScreen: { w: 21, h: 9 },
  standard: { w: 4, h: 3 },
  surfaceRatio: { w: 3, h: 2 },
  WXGA: { w: 16, h: 10 },
};

export const ContentsContainer = styled(Container)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
