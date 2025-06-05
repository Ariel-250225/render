/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import logoImage from "./logo.avif";
import sscNapoli from "../assets/image/news/SSC_Napoli.avif";
import { Divider } from "../layouts/Layouts";

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

          @media ${theme.deviceSize.phone} {
            width: 15em;
          }
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

            @media ${theme.deviceSize.phone} {
              width: 5em;
            }
          `}
        />
        <span
          css={css`
            font-family: ${theme.fontStyle.roboto};
            font-size: 2.6em;
            font-weight: 600;

            @media ${theme.deviceSize.phone} {
              font-size: 4.6em;
              font-weight: 800;
            }
          `}
        >
          SSC Napoli
        </span>
      </div>
    </div>
  );
}
