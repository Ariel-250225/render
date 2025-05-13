/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { LogoText } from "../Logo/LogoIcon";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoText />
        <address
          css={css`
            font-style: inherit;
            margin: 1vh 0;
          `}
        >
          지금 바로 문의하세요.
        </address>
        <FooterButtons>
          <TelegramIcon fontSize="large" href="https://about.codle.io" />
        </FooterButtons>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: relative;
  margin-top: 10vh;
  transform: translateY(0%);
  display: flex;
  align-items: flex-end;
  gap: 36px;

  background-color: black;
  color: white;
  width: 100%;

  @media only screen and (max-device-width: 600px) {
    /* 모바일에서는 로고가 하단에 나옴 */
    flex-direction: column-reverse;
    margin: 0 12px;
    align-items: flex-start;
  }
`;

const FooterContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 4px;
  flex: 1 0 0;
  /* Default/Paragraph/14px-Rg */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  align-items: center;
  transform: translateY(0%);
`;

const FooterButtons = styled.div`
  display: flex;
  gap: 12px 8px;
  justify-content: center;

  flex-wrap: wrap;
  padding: 15px 0;
`;
