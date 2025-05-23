/** @jsxImportSource @emotion/react */
import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { NewsCard } from "../card/News";

import sscNapoli from "../assets/image/news/SSC_Napoli.png";
import news_3 from "../assets/image/news/news_3.jpg";
import globalNews_1 from "../assets/image/news/global_news_1.jpg";
import globalNews_2 from "../assets/image/news/global_news_2.jpg";
import { ICoinLogo } from "../IcoinsLogo";
import { useWindowContext } from "../../Context/WindowContext";

export function GlobalNewsFeed() {
  const theme = useTheme();
  return (
    <>
      <NewsFeedContainer theme={theme}>
        <NewsCard
          image={globalNews_1}
          color="#5BB2E1"
          width={28}
          shape={false}
          contents={
            <FeedContainer>
              <FeedTitle theme={theme} fontSize={1.6} fontWeight={800}>
                OKGO & NAPOLI
              </FeedTitle>
              <FeedDescription theme={theme} fontSize={1}>
                HIGHLIGHT VIDEO <br />
              </FeedDescription>
            </FeedContainer>
          }
          aspectRatio="2/1"
        />
        <NewsCard
          image={globalNews_2}
          color="#5BB2E1"
          width={28}
          shape={false}
          contents={
            <FeedContainer>
              <FeedTitle theme={theme} fontSize={1.6} fontWeight={800}>
                SSC Napoli Official Partner
              </FeedTitle>
              <FeedDescription theme={theme} fontSize={1}>
                OKGO & 나폴리 공식 파트너쉽 진행 <br />
              </FeedDescription>
            </FeedContainer>
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
            <FeedContainer>
              <FeedTitle theme={theme} fontSize={1.6} fontWeight={800}>
                USDT TRC-20
              </FeedTitle>
              <FeedDescription theme={theme} fontSize={1}>
                TETHER WALLET SERVICE
                <br />
              </FeedDescription>
            </FeedContainer>
          }
          aspectRatio="2/1"
        />
      </NewsFeedContainer>
    </>
  );
}

export function NewsFeed() {
  const theme = useTheme();
  const { windowWidth } = useWindowContext();
  const isMobile = windowWidth <= theme.windowSize.mobile;
  return (
    <NewsFeedContainer theme={theme}>
      <NewsCard
        banner={
          <BannerImageCase width={20}>
            <img
              src={sscNapoli}
              alt="napoli"
              css={css`
                width: 100%;
              `}
            />
          </BannerImageCase>
        }
        image=""
        color="#040434"
        width={20}
        contents={
          <FeedContainer
            css={css`
              display: flex;
              flex-direction: column;
              align-content: flex-start;
              gap: 20px;
            `}
          >
            <FeedTitle theme={theme} fontSize={1.5} fontWeight={800}>
              글로벌 베팅을 선도하다
            </FeedTitle>
            <FeedDescription theme={theme} fontSize={1}>
              OKGO & 나폴리 공식 파트너쉽 진행 <br />
              나폴리 VS 제노아 경기
            </FeedDescription>
          </FeedContainer>
        }
        aspectRatio="1/1"
      />
      <NewsCard
        width={20}
        banner={
          <BannerImageCase width={28}>
            <ICoinLogo fontSize={isMobile ? 80 : 50} />
          </BannerImageCase>
        }
        color={theme.colors.azure}
        contents={
          <FeedContainer
            css={css`
              display: flex;
              flex-direction: column;
              align-content: flex-start;
              gap: 20px;
            `}
          >
            <FeedTitle theme={theme} fontSize={1.5} fontWeight={800}>
              가상화폐 입금, 아이코인 도입
            </FeedTitle>
            <FeedDescription theme={theme} fontSize={1}>
              고객의 보안을 1순위로 생각한 <br />
              비실명 회원제 도입
            </FeedDescription>
          </FeedContainer>
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
          <FeedContainer>
            <FeedTitle theme={theme} fontSize={1.5} fontWeight={800}>
              롤 정규리그 업데이트
            </FeedTitle>
            <FeedDescription theme={theme} fontSize={1}>
              LCK, LPL 등 정규리그 <br />
              발매 업데이트
            </FeedDescription>
          </FeedContainer>
        }
        aspectRatio="1/1"
      />
    </NewsFeedContainer>
  );
}

const BannerImageCase = styled.div<{ width?: number | null }>(
  ({ width }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    width: ${width}vw;
  `,
);

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 20px;
`;

const FeedTitle = styled.span<{
  fontSize: number;
  fontWeight: number;
  theme: Theme;
}>(
  ({ fontSize, fontWeight, theme }) => css`
    font-size: ${fontSize}em;
    font-weight: ${fontWeight};
    font-family: ${theme.fontStyle.roboto};

    @media ${theme.deviceSize.phone} {
      font-size: ${fontSize + 2.4}em;
    }
  `,
);

const FeedDescription = styled.span<{ fontSize: number; theme: Theme }>(
  ({ fontSize, theme }) => css`
    font-size: ${fontSize}em;
    font-family: ${theme.fontStyle.yesGothicMedium};

    @media ${theme.deviceSize.phone} {
      font-size: ${fontSize + 2.2}em;
    }
  `,
);

const NewsFeedContainer = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${theme.mode.textRevers};
    gap: 1vw;

    @media ${theme.deviceSize.phone} {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  `,
);
