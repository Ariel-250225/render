import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div<{
  theme: Theme;
  width: number;
  marginTop?: number;
  gap?: number;
}>(
  ({ theme, width, marginTop = 7, gap = 1 }) => css`
    width: ${width}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${gap}vw;
    box-sizing: border-box;
    margin-top: ${marginTop}px;

    @media ${theme.deviceSize.phone} {
      width: ${width}px;
    }
  `,
);
