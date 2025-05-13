/** @jsxImportSource @emotion/react */
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "@emotion/styled";
import { PageContainer } from "../component/Frame/FrameLayouts";
import { useWindowContext } from "../Context/WindowContext";
import { Carousel } from "react-responsive-carousel";
import ea_advertise from "../component/assets/video/ea-advertise.mp4";
// import cinematic_sports_basketball from "../component/assets/video/cinematic-sports-video-basketball-shoot-on-red-la-clippers-edit.mp4";
// import winning_isnt_for_everyone from "../component/assets/video/winning-isnt-for-everyone-winning-is-winning-nike.mp4";
// import winning_lebron_james from "../component/assets/video/winning-isnt-for-everyoneagain-lebron-james-nike.mp4";
import fullPerimeter from "../component/assets/video/full_perimeter.mp4";
import { ASPECT_RATIO, ContentsContainer } from "../component/layouts/Layouts";
import { css, Theme, useTheme } from "@emotion/react";
import { Fragment } from "react";
import { Sports } from "../component/Game/Sports";
import { SlotGames } from "../component/Games";
import { FuncItem } from "../component/styled/Button/Button";
import { LogoText } from "../component/Logo/LogoIcon";
import { NewsCard } from "../component/card/News";

import sscNapoli from "../component/assets/image/news/SSC_Napoli.png";
import news_3 from "../component/assets/image/news/news_3.jpg";
import globalNews_1 from "../component/assets/image/news/global_news_1.jpg";
import globalNews_2 from "../component/assets/image/news/global_news_2.jpg";
import { ICoinLogo } from "../component/IcoinsLogo";

import advertisement from "../component/assets/video/napoli-advertisement.mp4";

import TelegramIcon from "@mui/icons-material/Telegram";

const ADVERTISEMENT_LIST = [
  ea_advertise,
  // cinematic_sports_basketball,
  // winning_isnt_for_everyone,
  // winning_lebron_james,
];

export function Main() {
  const theme = useTheme();
  const { windowWidth } = useWindowContext();

  const itemHeight =
    (windowWidth / ASPECT_RATIO.widesScreen.w) * ASPECT_RATIO.widesScreen.h;

  return (
    <>
      <PageContainer width={windowWidth - 100} gap={10} theme={theme}>
        <CarouselContainer
          width={windowWidth}
          css={css`
            isolation: isolate;
          `}
        >
          <div
            css={css`
              position: absolute;
              color: white;
              z-index: 1;

              font-size: 5vw;

              text-align: center;
              font-weight: 800;
              font-family: ${theme.mode.font.component.mainTitle};
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
                margin-top: 30px;
              `}
            >
              <div>
                베팅을 즐겨라, <br />
                즐거움으로 승부하라 !
              </div>
              <FuncItem
                label={<LogoText />}
                css={css`
                  padding: 6px 40px;
                  border: 1px solid ${theme.mode.textPrimary};
                  background-color: rgba(255, 255, 255, 0);
                `}
                func={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
          <video
            width={windowWidth}
            src={fullPerimeter}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          />
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={false}
            interval={40000}
            transitionTime={1000}
            showThumbs={false}
          >
            {ADVERTISEMENT_LIST.map((video, index) => (
              <Fragment key={index}>
                <video
                  width={windowWidth}
                  height={itemHeight}
                  src={video}
                  controls={false}
                  playsInline
                  autoPlay
                  muted
                  loop
                  css={css`
                    z-index: -1;
                  `}
                />
              </Fragment>
            ))}
          </Carousel>
        </CarouselContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>COMPANY</ContentsTitle>
          <div
            css={css`
              margin: 2vh 0;
              text-align: center;
              font-size: 2.4vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: ${theme.fontStyle.koPubDotumBold};
            `}
          >
            <span
              css={css`
                margin-bottom: 3.5vh;
              `}
            >
              온라인 카지노, 스포츠 베팅, 슬롯게임, 그리고 세계 최고의 축구팀의
              파트너쉽과 <br />
              암호화폐 시스템까지,
            </span>
            <span>
              오직 OKGO 에서만 누릴 수 있는 제한없는 자유를 체험해보세요.
            </span>
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>WHAT IS NEXT?</ContentsTitle>
          <div
            css={css`
              width: 100%;
              margin: 8vh 0;
              text-align: center;
              font-size: 2.8vw;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              font-family: ${theme.fontStyle.koPubDotumBold};
            `}
          >
            <div
              css={css`
                position: relative;
                width: 100%;
                right: 0;
              `}
            >
              <div
                css={css`
                  position: absolute;
                  width: 2vw;
                  height: 2vw;
                  border: 2px solid white;
                  border-radius: 50%;
                  transform: translateY(-50%);
                  left: 0;
                  z-index: 1;

                  ::before {
                    content: "";
                    position: absolute;
                    background-color: white;
                    width: 0.8vw;
                    height: 0.8vw;
                    left: 50%;
                    top: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                  }
                `}
              />
              <div
                css={css`
                  position: absolute;
                  width: 2vw;
                  height: 2vw;
                  border: 2px solid white;
                  border-radius: 50%;
                  transform: translateY(-50%) translateX(10%);
                  right: 50%;
                  z-index: 1;

                  ::before {
                    content: "";
                    position: absolute;
                    background-color: ${theme.mode.textAccent};
                    width: 0.8vw;
                    height: 0.8vw;
                    left: 50%;
                    top: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                  }

                  ::after {
                    content: "";
                    display: block;
                    position: absolute;
                    border-radius: ${theme.borderRadius.circle};
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    animation: pulseEffect 1.2s infinite; /* ✅ 반복적으로 효과 적용 */
                  }

                  @keyframes pulseEffect {
                    0% {
                      opacity: 0.6;
                      box-shadow: 0 0 10px 5px ${theme.mode.textAccent};
                    }
                    50% {
                      opacity: 0.3;
                      box-shadow: 0 0 20px 12px transparent;
                    }
                    100% {
                      opacity: 0;
                      box-shadow: 0 0 30px 18px transparent;
                    }
                  }
                `}
              />
              <div
                css={css`
                  position: absolute;
                  background-color: white;
                  width: 47.8%;
                  height: 1px;
                  transform: translateX(3%);
                  z-index: 0;
                `}
              />
            </div>
          </div>
          <div
            css={css`
              margin: 2vh 0;
              text-align: center;
              font-size: 2.4vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: ${theme.fontStyle.koPubDotumBold};
            `}
          >
            <span
              css={css`
                margin-bottom: 3.5vh;
              `}
            >
              우리의 다음은 고객님들의 피드백입니다.
            </span>
            <span>고객님의 선택이 앞으로를 만듭니다.</span>
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>GLOBAL NEWS FEED</ContentsTitle>
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              align-content: center;
              color: ${theme.mode.textRevers};
              gap: 2vw;
            `}
          >
            <NewsCard
              image={globalNews_1}
              color="#5BB2E1"
              width={28}
              shape={false}
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.6em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.roboto};
                    `}
                  >
                    OKGO & NAPOLI
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    HIGHLIGHT VIDEO <br />
                  </span>
                </div>
              }
              aspectRatio="2/1"
            />
            <NewsCard
              image={globalNews_2}
              color="#5BB2E1"
              width={28}
              shape={false}
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.6em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.roboto};
                    `}
                  >
                    SSC Napoli Official Partner
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    OKGO & 나폴리 공식 파트너쉽 진행 <br />
                  </span>
                </div>
              }
              aspectRatio="2/1"
            />
            <NewsCard
              // eslint-disable-next-line noSecrets/no-secrets
              image="https://public.bnbstatic.com/static/academy/uploads-original/2fd4345d8c3a46278941afd9ab7ad225.png"
              color="#27A17A"
              width={28}
              shape={false}
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.6em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.roboto};
                    `}
                  >
                    SSC Napoli Official Partner
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    OKGO & 나폴리 공식 파트너쉽 진행 <br />
                  </span>
                </div>
              }
              aspectRatio="2/1"
            />
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>NEWS FEED</ContentsTitle>
          <div
            css={css`
              width: 100%;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              align-content: center;
              gap: 2vw;
              color: ${theme.mode.textRevers};
            `}
          >
            <NewsCard
              banner={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    aspect-ratio: 1/1;
                    width: 20vw;
                  `}
                >
                  <img
                    src={sscNapoli}
                    alt="napoli"
                    css={css`
                      width: 16vw;
                    `}
                  ></img>
                </div>
              }
              image=""
              color="#040434"
              width={20}
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.5em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.yesGothicBold};
                    `}
                  >
                    글로벌 베팅을 선도하다
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    OKGO & 나폴리 공식 파트너쉽 진행 <br />
                    나폴리 VS 제노아 경기
                  </span>
                </div>
              }
              aspectRatio="1/1"
            />
            <NewsCard
              width={20}
              banner={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    aspect-ratio: 1/1;
                    width: 20vw;
                  `}
                >
                  <ICoinLogo fontSize={50} />
                </div>
              }
              color={theme.colors.azure}
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.5em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.yesGothicBold};
                    `}
                  >
                    가상화폐 입금, 아이코인 도입
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    고객의 보안을 1순위로 생각한 <br />
                    비실명 회원제 도입
                  </span>
                </div>
              }
              aspectRatio="1/1"
              image=""
            />
            <NewsCard
              width={20}
              image={news_3}
              color="#061F27"
              description=""
              contents={
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-content: flex-start;
                    gap: 20px;
                  `}
                >
                  <span
                    css={css`
                      font-size: 1.5em;
                      font-weight: 800;
                      font-family: ${theme.fontStyle.yesGothicBold};
                    `}
                  >
                    롤 정규리그 업데이트
                  </span>
                  <span
                    css={css`
                      font-size: 1em;
                      font-family: ${theme.fontStyle.yesGothicMedium};
                    `}
                  >
                    LCK, LPL 등 정규리그 <br />
                    발매 업데이트
                  </span>
                </div>
              }
              aspectRatio="1/1"
            />
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>LET`S PLAY</ContentsTitle>
          <Sports title="" />
          <div
            css={css`
              margin: 2vh 0;
              text-align: center;
              font-size: 2.4vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: ${theme.fontStyle.koPubDotumBold};
            `}
          >
            <span
              css={css`
                margin: 3.5vh 0;
              `}
            >
              다른곳에서 발매되지 않는 게임을 오직 OKGO에서,
            </span>
            <span>더 높은 배당으로.</span>
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <SlotGames />
        </ContentsContainer>
        <ContentsContainer>
          <ContentsTitle theme={theme}>GLOBAL PARTNER</ContentsTitle>
          <video
            width={windowWidth - 200}
            src={advertisement}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          />
          <ContentsTitle theme={theme}>WHO IS NEXT?</ContentsTitle>
          <div
            css={css`
              margin: 2vh 0;
              text-align: center;
              font-size: 2.4vw;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: ${theme.fontStyle.koPubDotumBold};
            `}
          >
            <span
              css={css`
                margin: 3.5vh 0;
              `}
            >
              당신이 생각하는 최고의 팀과 함께합니다.
            </span>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 20px;
              `}
            >
              <span>우리의 다음 파트너를 알려주세요. </span>
              <TelegramIcon
                fontSize="large"
                sx={{ width: "2em", height: "2em", cursor: "pointer" }}
              />
            </div>
          </div>
        </ContentsContainer>
      </PageContainer>
    </>
  );
}

const ContentsTitle = styled.h2<{ theme: Theme }>(
  ({ theme }) => css`
    font-weight: 700;
    font-size: 4vw;
    font-family: ${theme.mode.font.component.mainTitle};
  `,
);

const CarouselContainer = styled.div<{ width: number }>(
  ({ width }) => css`
    width: ${width}px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: black;
    margin-bottom: 40px;
  `,
);
