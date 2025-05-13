/** @jsxImportSource @emotion/react */
import pragmatic from "./assets/image/game/pragmatic.webp";
import pgSlot from "./assets/image/game/pg_slot.png";
import evolution from "./assets/image/game/evolution.jpeg";
import eSports from "./assets/image/game/e-sports_gaming.jpg";
import { useWindowContext } from "../Context/WindowContext";
import { Theme, useTheme } from "@emotion/react";
import { useEffect, useRef } from "react";
import { useItemResizing } from "../hooks/useLayouts";
import { useItemScrollControls } from "../hooks/useWheel";
import { ComponentContainer } from "./Frame/FrameLayouts";
import { ExhibitionContainer, Item, ItemContainer } from "./layouts/Layouts";
import { css } from "@mui/material";
import styled from "@emotion/styled";
import { StyledImage } from "./styled/Image/Image";

const MOVE_FACTOR = 3;
const ITEM_VIEW_LENGTH = 3; // 보여주고 싶은 아이템의 개수입니다.
const ITEM_GAP = 12;

const DEMO_MINI_GAMES = [
  {
    name: "Ghost Boo Nanaza",
    image: pragmatic,
    description: "Ghost Boo !! 뿌쓩빠슝 유령을 해치워서 돈을 벌어봐욧 !",
    path: "ghost_boo_nanaza",
  },
  {
    name: "STAR 🌟 Shine Princess",
    image:
      // eslint-disable-next-line noSecrets/no-secrets
      "https://pbs.twimg.com/profile_images/1811318315588915200/6C7t1_VY_400x400.png",
    description: "카와이한 공주님과 함께 돈을 벌어봐욧 !",
    path: "reel_big_catch",
  },
  {
    name: "REEL BIG Catch",
    image:
      // eslint-disable-next-line noSecrets/no-secrets
      "https://media.licdn.com/dms/image/v2/C4D12AQHMc1JoFWLYfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1552637504906?e=2147483647&v=beta&t=cwnMxXlinMh3fkcWP9t5aIjxtEC6lR1FETwcaDJ5LiI",
    description: "커여운 악어가 물코기를 잡으면 돈을 줘욧 !",
    path: "reel_big_catch",
  },
  {
    name: "Golden Year",
    image: evolution,
    description: "뭔지 잘 몰라욧 !",
    path: "golden_year",
  },
  {
    name: "WU KONG",
    image: pgSlot,
    description: "손육공과 함께 돈을 벌어봐욧 !",
    path: "wu_kong",
  },
  {
    name: "WU KONG",
    image: eSports,
    description: "손육공과 함께 돈을 벌어봐욧 !",
    path: "wu_kong",
  },
];

export function SlotGames() {
  const { windowWidth } = useWindowContext();
  const theme = useTheme();

  const componentContainerRef = useRef<HTMLDivElement>(null);
  const componentWidth = windowWidth * 0.8;

  const { itemWidth, isTablet, moveParam } = useItemResizing(
    windowWidth,
    componentWidth,
    ITEM_GAP,
    ITEM_VIEW_LENGTH,
    MOVE_FACTOR,
  );

  const sizeSelector = isTablet ? (itemWidth - 12 * 2) / 3 : itemWidth;

  const { scrollXValue } = useItemScrollControls({
    itemList: DEMO_MINI_GAMES,
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
    <>
      <ComponentContainer ref={componentContainerRef}>
        <ExhibitionContainer
          width={isTablet ? itemWidth : componentWidth}
          ref={containerRef}
          activeScroll={false}
        >
          <ItemContainer
            theme={theme}
            gap={ITEM_GAP}
            css={css`
              flex-wrap: wrap;
              justify-content: center;
            `}
          >
            {DEMO_MINI_GAMES.map((game, index) => (
              <Item
                theme={theme}
                key={index}
                width={sizeSelector}
                height={sizeSelector}
              >
                <GameImageBox
                  theme={theme}
                  imageUrl={game.image}
                  size={{
                    width: sizeSelector,
                    height: sizeSelector,
                  }}
                />
              </Item>
            ))}
          </ItemContainer>
        </ExhibitionContainer>
      </ComponentContainer>
    </>
  );
}

const GameImageBox = styled(StyledImage)<{ theme: Theme }>(
  ({ theme }) => css`
    border-radius: ${theme.borderRadius.softBox};
  `,
);

// const slideUp = keyframes`
//     0% {
//         visibility: hidden;
//         transform: translateY(50px);
//         opacity: 0;
//     }
//     100% {
//         visibility: visible;
//         transform: translateY(0);
//         opacity: 1;
//     }
// `;
//
// const BannerContents = styled(RollingBanner)`
//   opacity: 0;
//   animation: ${slideUp} 0.8s ease-out forwards;
//   animation-delay: 0.6s; // ✅ 세 번째로 등장
// `;
