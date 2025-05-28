/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import { useScrollPosition } from "../../hooks/useWheel";

const LOCATION_DOT_WIDTH = 11;
const TIMELINE_MARGIN_TOP = 90;
const LOCATION_DOT_HEIGHT = 12;

export interface timeLineContentsType {
  image: string;
  date: string;
  title: string;
  description: string;
}

export function TimeLineProcessY(props: {
  timeLineContents: timeLineContentsType[];
}) {
  const { timeLineContents } = props;
  const [processPosition, setProcessPosition] = useState<number>(0);
  const theme = useTheme();
  const timeLineRef = useRef<HTMLDivElement>(null);
  const contentsContainerRef = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (contentsContainerRef.current) {
      setProcessPosition(
        scrollPosition -
          contentsContainerRef.current.offsetTop +
          TIMELINE_MARGIN_TOP * 2,
      );
    }
  }, [scrollPosition]);

  const [topOffsets, setTopOffsets] = useState<number[]>([]);

  useEffect(() => {
    if (timeLineRef.current && contentsContainerRef.current) {
      const offsets: number[] = [];

      const containerTop =
        contentsContainerRef.current.getBoundingClientRect().top;

      Array.from(
        timeLineRef.current.querySelectorAll(".description-title"),
      ).forEach((el) => {
        if (contentsContainerRef.current) {
          const elementTop = el.getBoundingClientRect().top;
          const offset =
            elementTop -
            containerTop +
            LOCATION_DOT_HEIGHT / 2 -
            TIMELINE_MARGIN_TOP;
          offsets.push(offset);
        }
      });

      setTopOffsets(offsets);
    }
  }, [timeLineContents]);

  const dotRightFactor = timeLineRef.current
    ? timeLineRef.current.offsetWidth / 2 - LOCATION_DOT_WIDTH / 2
    : 0;

  return (
    <ContentsContainer
      ref={contentsContainerRef}
      css={css`
        align-items: center;
        isolation: isolate;
        margin: 0;
      `}
    >
      <TimeLineWrapper ref={timeLineRef}>
        <BarArea>
          <BarProcess style={{ height: `${processPosition}px` }} theme={theme}>
            <Bar theme={theme} />
          </BarProcess>
        </BarArea>
        <TimeObjectList>
          {timeLineContents.map((item, index) => {
            const arrive: boolean =
              processPosition >=
              topOffsets[index as number] +
                LOCATION_DOT_HEIGHT -
                TIMELINE_MARGIN_TOP * 1.5;

            return (
              <ContentsList key={index}>
                <ContentsContainer>
                  <TextArea arrive={arrive}>
                    <StyledDescription theme={theme}>
                      <DescriptionTitle
                        theme={theme}
                        className="description-title"
                      >
                        {item.date}
                        <i
                          css={css`
                            position: absolute;
                            top: ${topOffsets[index as number] || 0}px;
                            right: ${dotRightFactor}px;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: ${theme.colors.lameGreen};
                            z-index: 1;

                            &:after {
                              content: "";
                              position: absolute;
                              left: 50%;
                              top: 50%;
                              width: 20px;
                              height: 20px;
                              margin-top: -12px;
                              margin-left: -12px;
                              border: 2px solid ${theme.colors.lameGreen};
                              border-radius: 50%;
                              transition: transform 0.25s ease-out;
                              transform: ${processPosition +
                                LOCATION_DOT_HEIGHT >=
                              topOffsets[index as number]
                                ? "scale(1)"
                                : "scale(0)"};
                            }
                          `}
                        />
                      </DescriptionTitle>
                      <DescriptionSubTitle theme={theme}>
                        {item.title}
                      </DescriptionSubTitle>
                      <DescriptionContents theme={theme}>
                        {item.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </DescriptionContents>
                    </StyledDescription>
                  </TextArea>
                  <ImageWrapper>
                    <StyledImageCover src={item.image} alt="" theme={theme} />
                  </ImageWrapper>
                </ContentsContainer>
              </ContentsList>
            );
          })}
        </TimeObjectList>
      </TimeLineWrapper>
    </ContentsContainer>
  );
}

const TimeLineWrapper = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: 100px;
`;

const BarArea = styled.div`
  text-align: right;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2px !important;
  margin-left: -1px;
  height: calc(100% + 10px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: linear-gradient(
    0deg,
    rgba(221, 221, 221, 0) 0%,
    rgb(221, 221, 221) 50px,
    rgb(221, 221, 221) calc(100% - 50px),
    rgba(221, 221, 221, 0) 100%
  );
  margin-right: 0 !important;
  z-index: 0;
`;

const BarProcess = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0.1%;
    width: 100%;
    overflow: hidden;
    transition: 0s;
    background-color: ${theme.colors.lameGreen};
    transform: scaleX(0.8); /* 원하는 비율로 조절 */
    transform-origin: top;
  `,
);

const Bar = styled.i<{ theme: Theme }>(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    background: linear-gradient(
      0deg,
      rgba(20, 72, 53, 0) 0%,
      ${theme.colors.lameGreen} 50px,
      ${theme.colors.lameGreen} calc(100% - 50px),
      rgba(20, 72, 53, 0) 100%
    );
  `,
);

const TimeObjectList = styled.ol`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContentsList = styled.li`
  padding-bottom: 125px;
  font-family: "Noto Sans KR", "Halvar Breitschrift", sans-serif, dotum, gulim;
  font-weight: 400;
  white-space: normal;
  line-height: 1.4em;
  color: #111;
  font-size: 16px;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 240px;
  font-size: 1em;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const TextArea = styled.div<{ arrive: boolean }>(
  ({ arrive }) => css`
    width: 50%;
    margin-right: ${arrive ? 64 : 200}px;
    text-align: right;

    transition: all 500ms ease;
  `,
);

const StyledDescription = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.white};
    text-align: right;
    height: 500px;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    font-family: ${theme.fontStyle.appleNeoBold};

    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    overflow: scroll;
  `,
);

const DescriptionTitle = styled.h1<{ theme: Theme }>(
  ({ theme }) => css`
    margin: 10px 0;
    color: ${theme.colors.lameGreen};
    font-size: 34px;

    @media ${theme.deviceSize.tablet} {
      font-size: 30px;
    }

    @media ${theme.deviceSize.phone} {
      font-size: 26px;
    }
  `,
);

const DescriptionSubTitle = styled.h3<{ theme: Theme }>(
  ({ theme }) => css`
    width: 30vw;
    font-size: 24px;
    color: ${theme.colors.white};

    @media ${theme.deviceSize.tablet} {
      font-size: 18px;
    }

    @media ${theme.deviceSize.phone} {
      font-size: 14px;
    }
  `,
);

const DescriptionContents = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    width: 30vw;
    font-size: 20px;

    @media ${theme.deviceSize.tablet} {
      font-size: 16px;
    }

    @media ${theme.deviceSize.phone} {
      font-size: 12px;
      line-height: 14px;
    }
  `,
);

const ImageWrapper = styled.div`
  text-align: left;
  width: 50%;
  position: relative;
  margin: 10px 0 0 1vw;
`;

const StyledImageCover = styled.img<{ width?: number; theme: Theme }>(
  ({ theme }) => css`
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
    aspect-ratio: 2/1;
    @media ${theme.deviceSize.phone} {
      height: 30vh;
      aspect-ratio: 2/1;
    }
  `,
);
