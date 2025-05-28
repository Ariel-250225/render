/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";

import styled from "@emotion/styled";
import { useWindowContext } from "../../Context/WindowContext";
import { useItemScrollControls } from "../../hooks/useWheel";
import { ComponentContainer } from "../Frame/FrameLayouts";
import {
  ControlBox,
  ExhibitionContainer,
  ItemContainer,
  MainTitle,
  MainTitleLine,
} from "../layouts/Layouts";
import { LeftArrowIcon, RightArrowIcon } from "../styled/icons";
import { FuncItem } from "../styled/Button/Button";
import { css, Theme, useTheme } from "@emotion/react";
import { useItemResizing } from "../../hooks/useLayouts";
import soccer from "../assets/image/sport/soccer.jpg";
import casino from "../assets/image/game/casino.jpeg";
// import basketball from "../assets/image/game/sport/basketball-dunk.jpg";
// import volleyball from "../assets/image/game/sport/volleyball.jpg";
// import baseball from "../assets/image/game/sport/baseball.jpg";
// import f1 from "../assets/image/game/sport/f1.jpg";
// import hockey from "../assets/image/game/sport/hockey.jpg";
// import ufc from "../assets/image/game/sport/ufc.jpg";
// import pingPong from "../assets/image/game/sport/pingpong.jpg";
// import tennis from "../assets/image/game/sport/tennis.jpg";
import eSports from "../assets/image/sport/esports.jpg";
// import americaFootball from "../assets/image/game/sport/america-football.jpg";
// import cricket from "../assets/image/game/sport/cricket.jpg";

/** 이동시키고 싶은 카드의 개수입니다.
 * 해당 상수를 따라, 카드는 MOVE_PARAM 개씩 이동합니다.
 * */
const MOVE_FACTOR = 3;
const ITEM_VIEW_LENGTH = 3; // 보여주고 싶은 아이템의 개수입니다.
const ITEM_GAP = 12;

const SAMPLE_IMAGE_LIST = [
  {
    title: "LIVE CASINO",
    image: casino,
  },
  {
    title: "LIVE SPORTS",
    image: soccer,
  },
  {
    title: "LIVE ESPORTS ",
    image: eSports,
  },
];

export function Sports(props: {
  viewPort?: number;
  title: string;
  titleView?: boolean;
}) {
  const { viewPort, title, titleView } = props;
  const theme = useTheme();
  const { windowWidth } = useWindowContext();

  const componentContainerRef = useRef<HTMLDivElement>(null);
  const componentWidth = windowWidth * 0.8;

  const { itemWidth, isTablet, isMobile, moveParam } = useItemResizing(
    windowWidth,
    componentWidth,
    ITEM_GAP,
    ITEM_VIEW_LENGTH,
    MOVE_FACTOR,
  );

  const calculatedWidth = isTablet ? (itemWidth - 12 * 2) / 3 : itemWidth;

  const { scrollXValue, leftButton, rightButton } = useItemScrollControls({
    itemList: SAMPLE_IMAGE_LIST,
    itemWidth: itemWidth,
    itemGap: ITEM_GAP,
    moveParam,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.scrollTo({
      left: scrollXValue,
      top: 0,
      behavior: "smooth",
    });
  }, [scrollXValue]);

  return (
    <ComponentContainer ref={componentContainerRef}>
      {titleView && (
        <MainTitleLine theme={theme}>
          <MainTitle theme={theme}>{title}</MainTitle>
          {viewPort &&
            SAMPLE_IMAGE_LIST.length > ITEM_VIEW_LENGTH &&
            !isMobile && (
              <ControlBox theme={theme}>
                <FuncItem func={leftButton} label={<LeftArrowIcon />} />
                <FuncItem func={rightButton} label={<RightArrowIcon />} />
              </ControlBox>
            )}
        </MainTitleLine>
      )}
      <ExhibitionContainer
        width={isTablet ? itemWidth : componentWidth}
        ref={containerRef}
        activeScroll={false}
      >
        <ItemContainer
          activeScroll={false}
          gap={ITEM_GAP}
          css={css`
            flex-wrap: wrap;
            justify-content: center;
          `}
          theme={theme}
        >
          {SAMPLE_IMAGE_LIST.map((item, index) => (
            <Card
              key={index}
              theme={theme}
              width={calculatedWidth}
              imageUrl={item.image}
            >
              <Border className="border" theme={theme} width={calculatedWidth}>
                <Title theme={theme}>{item.title}</Title>
              </Border>
            </Card>
          ))}
        </ItemContainer>
      </ExhibitionContainer>
    </ComponentContainer>
  );
}

const Border = styled.div<{ width: number; theme: Theme }>(
  ({ width, theme }) => css`
    width: ${width - 20}px;
    aspect-ratio: 4/5;
    background: transparent;
    border-radius: ${theme.borderRadius.roundedBox};
    transition: border 1s;
    position: relative;
    &:hover {
      border: 1px solid white;
    }

    &:focus {
      border: 1px solid white;
    }
  `,
);

const Card = styled.div<{
  imageUrl: string;
  width: number;
  theme: Theme;
}>(
  ({ imageUrl, width, theme }) => css`
    max-width: ${width}px;
    min-width: ${width}px;
    width: ${width}px;
    aspect-ratio: 4/5;
    border-radius: ${theme.borderRadius.roundedBox};
    background-color: ${theme.mode.cardBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    overflow: hidden;

    box-sizing: border-box;
    border-radius: ${theme.borderRadius.roundedBox};
    transition:
      background 0.8s,
      width 0.8s ease-in-out,
      height 0.8s ease-in-out;
    background: black;
    box-shadow: 0 70px 63px -60px #000000;
    background: url(${imageUrl}) center center no-repeat;
    background-size: ${width}px;
    position: relative;
    isolation: isolate; /* 새로운 stacking context 생성 */

    svg {
      margin-left: 10px;
      padding: 0;
      width: ${width / 2.02}px;
      height: ${width / 5.5}px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.8s ease-in-out;
      border-radius: ${theme.borderRadius.roundedBox};
      z-index: -1; /* Border 아래로 보내기 */
    }

    &:hover {
      background: url(${imageUrl}) left center no-repeat;
      background-size: ${width + 30}px;

      &::after {
        background-color: rgba(0, 0, 0, 0.3);
      }

      svg {
        opacity: 1;
      }

      h2 {
        opacity: 1;
      }

      .fa {
        opacity: 1;
      }
    }
  `,
);

const Title = styled.h2<{ theme: Theme }>(
  ({ theme }) => css`
    font-family: ${theme.mode.font.contents.main.title};
    color: white;
    margin: 0.5vw 0 0.5vw 1vw;
    opacity: 0;
    transition: opacity 1s;
    font-size: 1.5vw;

    svg {
      width: 180px;
      color: ${theme.mode.textPrimary};
      fill: ${theme.mode.textPrimary};
    }
    svg {
      color: ${theme.mode.textPrimary};
    }
  `,
);
