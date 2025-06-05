/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@mui/material";
import { Theme, useTheme } from "@emotion/react";
import { Logo } from "../Logo/LogoIcon";

export function Header() {
  const theme = useTheme();
  return (
    <HeaderWrapper theme={theme}>
      <Logo />
    </HeaderWrapper>
  );
}

export const HeaderWrapper = styled.header<{ theme: Theme }>(
  ({ theme }) => css`
    // 항상 하위요소들의 최상위에 존재하기 위해 z-index를 추가합니다.
    z-index: 1;
    top: 0;
    position: fixed;
    width: 100%;
    box-sizing: border-box;

    background-color: ${theme.mode.cardBackground};
    padding: 0.8vh 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
);
