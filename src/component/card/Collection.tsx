/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { RefObject, useState } from "react";
import { CustomModal } from "../Modal/Modal";

export interface collectionContentsType {
  image: string;
  title: string;
  description: string;
  detail: { image?: string; color?: string[]; detailContents: string };
}

export function Collection(props: {
  ref: RefObject<HTMLDivElement | null>;
  collectionContents: collectionContentsType;
  theme: Theme;
  isWhite?: boolean;
}) {
  const { ref, collectionContents, theme, isWhite = false } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <CollectionWrapper theme={theme} onClick={() => setOpen(true)} ref={ref}>
        <ImageCase imageUrl={collectionContents.image} theme={theme} />
        <InfoLine isWhite={isWhite}>
          <Title>{collectionContents.title}</Title>
          <div>
            {collectionContents.description.split("\n").map((line, index) => (
              <Description key={index}>
                {line} <br />
              </Description>
            ))}
          </div>
        </InfoLine>
      </CollectionWrapper>
      <CustomModal
        open={open}
        close={() => setOpen(false)}
        children={
          <Detail
            collectionContents={collectionContents}
            theme={theme}
            isWhite={isWhite}
          />
        }
      />
    </>
  );
}

const CollectionWrapper = styled.article<{ theme: Theme }>(
  ({ theme }) => css`
    width: 350px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    font-family: ${theme.fontStyle.sCoreDreamBold};
    flex-shrink: 0;
  `,
);

const ImageCase = styled.div<{ theme: Theme; imageUrl: string }>(
  ({ imageUrl }) => css`
    width: 100%;
    height: 100%;
    background-image: url(${imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;

    scroll-snap-align: start;
    overflow: hidden;

    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
    transform: scale(1);

    &:hover {
      transform: scale(1.03);
    }
  `,
);

const InfoLine = styled.div<{ isWhite: boolean }>(
  ({ isWhite }) => css`
    position: absolute;
    top: 0;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vh;
    color: ${isWhite ? "#000000" : "#ffffff"};
  `,
);

const Title = styled.span`
  font-size: 18px;
`;

const Description = styled.span`
  font-size: 24px;
`;

function Detail(props: {
  collectionContents: collectionContentsType;
  theme: Theme;
  isWhite: boolean;
}) {
  const { collectionContents, theme, isWhite } = props;

  return (
    <DetailContainer theme={theme}>
      <HeaderLine>
        <Title style={{ marginBottom: 20 }}>{collectionContents.title}</Title>
        <DetailDescription>{collectionContents.description}</DetailDescription>
      </HeaderLine>
      <DetailContentsWrapper
        theme={theme}
        colors={collectionContents.detail.color}
      >
        <div
          css={css`
            width: 90%;
          `}
        >
          {collectionContents.detail.detailContents
            .split("\n")
            .map((line, index) => (
              <span
                key={index}
                css={css`
                  text-align: left;
                  width: 100%;
                `}
              >
                {line} <br />
              </span>
            ))}
        </div>
        <DetailImageCase
          src={collectionContents.detail.image}
          css={
            isWhite
              ? css`
                  filter: invert(1);

                  margin-top: 10%;
                  width: 20%;
                `
              : css``
          }
        />
      </DetailContentsWrapper>
    </DetailContainer>
  );
}

const DetailContainer = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    height: 100%;
    width: 100%;

    padding: 20px 10px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-family: ${theme.fontStyle.sCoreDreamBold};

    box-sizing: border-box;

    overflow: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
);

const HeaderLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  margin-bottom: 50px;
`;

const DetailDescription = styled(Description)`
  font-size: 3vw;
`;

const DetailContentsWrapper = styled.div<{ theme: Theme; colors?: string[] }>(
  ({ theme, colors }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent; // 필수!
    border-radius: 25px; // 꼭 background와 일치해야 깔끔

    margin-bottom: 20px;

    gap: 10px;

    font-size: 1.5vw;

    padding: 50px 10px;
    box-sizing: border-box;
    ${colors
      ? css`
          background:
            linear-gradient(#000000, #000000) padding-box,
            linear-gradient(
                -120deg,
                ${colors[0]},
                ${colors[1]} 34%,
                ${colors[2]} 68%,
                ${colors[3]}
              )
              border-box;
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow:
            inset 0 0 20px ${colors[0]},
            inset 0 0 20px ${colors[3]};
        `
      : css`
          background-color: ${theme.colors.ashGray};
        `}

    @media ${theme.deviceSize.phone} {
      font-size: 12px;
    }
  `,
);

const DetailImageCase = styled.img`
  width: 90%;

  border-radius: 25px;
`;
