/** @jsxImportSource @emotion/react */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "@emotion/styled";
import { PageContainer } from "../component/Frame/FrameLayouts";
import { useWindowContext } from "../Context/WindowContext";
import banner from "../component/assets/video/banner.mp4";
import { ASPECT_RATIO, ContentsContainer } from "../component/layouts/Layouts";
import { css, Theme, useTheme } from "@emotion/react";
import { useRef } from "react";
import { FuncItem } from "../component/styled/Button/Button";
import { useLinearInterpolation } from "../hooks/useWindowHooks";
import { AdCardSection } from "../component/contents/AdCardSection";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const domainMatcher = (domain: string) => {
  if (domain.includes("okgo안내")) {
    return "okgo-bbb.com";
  } else if (domain.includes("okgossc88.com")) {
    return "okgo-ccc.com";
  } else if (domain.includes("okgo접속.com")) {
    return "okgo-ddd.com";
  } else {
    return "okgo-aaa.com";
  }
};

export const move = (url: string) => {
  window.location.href = "https://" + url;
};

export function Main() {
  const theme = useTheme();
  const { windowWidth } = useWindowContext();

  const scrollRef = useRef<HTMLDivElement>(null);
  const adCardRef = useRef<HTMLDivElement>(null);

  const header = document.querySelector("header");

  const { result } = useLinearInterpolation(windowWidth, 864, 48, 1728, 82);
  const isDesktop = windowWidth >= theme.windowSize.HD;

  const itemHeight =
    (windowWidth / ASPECT_RATIO.widesScreen.w) * ASPECT_RATIO.widesScreen.h;

  const scrollNext = () => {
    const container = scrollRef.current;
    const card = adCardRef.current;

    if (!container || !card) return;

    const cardWidth = card.clientWidth;
    const gap = 0;

    container.scrollLeft += cardWidth + gap;
  };

  const scrollPrev = () => {
    const container = scrollRef.current;
    const card = adCardRef.current;

    if (!container || !card) return;

    const cardWidth = card.clientWidth;
    const gap = 10;
    container.scrollLeft -= cardWidth + gap;
  };

  return (
    <>
      <PageContainer
        width={windowWidth}
        gap={5}
        theme={theme}
        marginTop={header ? header.offsetHeight : result}
      >
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
              `}
            ></div>
          </div>
          <video
            width={windowWidth}
            height={itemHeight}
            src={banner}
            controls={false}
            playsInline
            autoPlay
            muted
            loop
          />
          <ContentsContainer>
            <div
              css={css`
                display: flex;
                box-sizing: border-box;
                padding-left: 3%;
                justify-content: space-between;
                align-items: flex-end;
                width: 100%;
                margin-top: 2%;

                h2 {
                  margin: 0;
                }
              `}
            >
              <ContentsTitle theme={theme}>JOIN US</ContentsTitle>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 8px;
                margin-top: 2%;
              `}
            >
              <FuncItem
                label={domainMatcher(window.location.hostname).toUpperCase()}
                css={css`
                  width: 25vw;
                  font-family: ${theme.fontStyle.iBrand};
                  background-color: ${theme.mode.buttonHoverBackground};
                  font-size: 2.5rem;
                `}
                func={() => move(domainMatcher(window.location.hostname))}
              />
            </div>
          </ContentsContainer>
        </CarouselContainer>
        <ContentsContainer>
          <div
            css={css`
              display: flex;
              box-sizing: border-box;
              padding-left: 3%;
              justify-content: space-between;
              align-items: flex-end;
              width: 100%;

              h2 {
                margin: 0;
              }
            `}
          >
            <ContentsTitle theme={theme}>WHY OKGO?</ContentsTitle>
          </div>
        </ContentsContainer>
        <ContentsContainer
          ref={scrollRef}
          css={css`
            width: 100%;
            align-items: flex-start;
            padding: ${isDesktop ? "1% 2%" : "2%"};
            box-sizing: border-box;
            margin: 0 10%;

            overflow-x: scroll;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;

            -ms-overflow-style: none;
            &::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <AdCardSection ref={adCardRef} />
        </ContentsContainer>
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            box-sizing: border-box;
            padding-right: 4%;
            gap: 1vw;

            svg {
              transition: scale 0.4s ease-in-out;
              &:hover {
                scale: 1.1;
              }
            }
          `}
        >
          <ArrowCircleLeftIcon
            sx={{ width: 40, height: 40 }}
            onClick={scrollPrev}
          />
          <ArrowCircleRightIcon
            sx={{ width: 40, height: 40 }}
            onClick={scrollNext}
          />
        </div>
      </PageContainer>
    </>
  );
}

const ContentsTitle = styled.h2<{ theme: Theme }>(
  ({ theme }) => css`
    font-weight: 600;
    font-size: 3vw;
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

    margin-bottom: 40px;
  `,
);
