/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { SlideButton } from "../styled/Button/Button";
import { css, useTheme } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  useProportionHook,
  useProportionSizeHook,
} from "../../hooks/useWindowHooks";
import { useWindowContext } from "../../Context/WindowContext";

export function Footer() {
  const theme = useTheme();
  const { windowWidth } = useWindowContext();
  const font = useProportionHook(windowWidth, 16, theme.windowSize.mobile);
  const icon = useProportionHook(windowWidth, 25, theme.windowSize.mobile);
  const container = useProportionSizeHook(
    windowWidth,
    200,
    60,
    theme.windowSize.mobile,
  );

  const isOkGoSsc88 = window.location.hostname.includes("okgossc88");

  const move = (url: string) => {
    window.location.href = url;
  };

  return (
    <FooterContainer>
      <div
        css={css`
          display: flex;

          align-items: center;
          justify-content: center;
          gap: 5vw;

          font-family: ${theme.fontStyle.yesGothicBold};
        `}
      >
        <SlideButton
          label="가입하기"
          icon={<ArrowForwardIcon />}
          backgroundColor={theme.mode.cardBackground}
          buttonBackgroundColor={theme.colors.darkCerulean}
          buttonSize={container.size}
          fontSize={font.size}
          iconSize={icon.size}
          func={() =>
            move(isOkGoSsc88 ? "https://okgo-ccc.com" : "https://okgo-ccc.com")
          }
        />
        <SlideButton
          label="텔레그램"
          icon={<TelegramIcon />}
          backgroundColor={theme.mode.cardBackground}
          buttonBackgroundColor={theme.colors.blueBikini}
          buttonSize={container.size}
          fontSize={font.size}
          iconSize={icon.size}
          func={() => move("https://t.me/go365")}
        />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  z-index: 1;
  bottom: 0;
  position: fixed;
  width: 100%;
  box-sizing: border-box;

  padding: 0.8vh 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
