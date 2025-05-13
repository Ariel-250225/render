/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";

export function LogoText() {
  const theme = useTheme();
  return <LogoTextCase theme={theme}>OKGO.COM</LogoTextCase>;
}

const LogoTextCase = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    white-space: nowrap;
    color: ${theme.mode.textPrimary};
    font-family: ${theme.mode.font.logo};
    font-weight: 700;
    font-size: 2vw;
    transform: translateY(0%);
    letter-spacing: -0.07em;
  `,
);
