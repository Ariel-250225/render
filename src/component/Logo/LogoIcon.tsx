/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";
import logoImage from "./logo.png";
import sscNapoli from "../assets/image/news/SSC_Napoli.png";
import { Divider } from "../layouts/Layouts";

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

export function Logo() {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        gap: 2vw;
      `}
    >
      <img
        src={logoImage}
        alt="logo"
        css={css`
          width: 8em;
        `}
      />
      <Divider theme={theme} />
      <div
        css={css`
          display: flex;
          flex-direction: row;

          align-items: center;
          justify-content: center;
          gap: 8px;
        `}
      >
        <img
          src={sscNapoli}
          alt="napoli"
          css={css`
            background-color: #ffffff;
            width: 3em;

            border-radius: 50%;
          `}
        />
        <span
          css={css`
            font-size: 2.6em;
            font-family: ${theme.fontStyle.roboto};
            font-weight: 600;
          `}
        >
          SSC Napoli
        </span>
      </div>
    </div>
  );
}
