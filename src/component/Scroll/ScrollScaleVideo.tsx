/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export function ScrollScaleVideo(props: {
  windowWidth: number;
  video: string;
}) {
  const { video } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  // 조정 가능한 매개변수들

  const [matrix, setMatrix] = useState("matrix(1, 0, 0, 1, 0, 0)");
  const [clipPath, setClipPath] = useState("inset(0% round 0px)");

  const MAX_REDUCTION = 0.99;
  const MAX_INSET = 2.5;
  const MAX_RADIUS = 16;
  const MAX_SCROLL = 1000; // 이만큼 내리면 최대 효과 적용

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const progress = Math.min(1, y / MAX_SCROLL);

      const scale = 1 - (1 - MAX_REDUCTION) * progress;
      const inset = MAX_INSET * progress;
      const radius = MAX_RADIUS * progress;

      setMatrix(`matrix(${scale}, 0, 0, ${scale}, 0, 0)`);
      setClipPath(`inset(${inset}% round ${radius}px)`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <VideoWrapper ref={wrapperRef} matrix={matrix} clipPath={clipPath}>
        <video
          width="100%"
          src={video}
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          css={css`
            display: block;
            width: 100%;
            height: auto;
          `}
        />
      </VideoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoWrapper = styled.div<{ matrix: string; clipPath: string }>`
  width: 100%;
  overflow: hidden;
  transform: ${({ matrix }) => matrix};
  clip-path: ${({ clipPath }) => clipPath};
  transform-origin: center top;
  will-change: transform, clip-path;
  transition:
    transform 0.1s linear,
    clip-path 0.1s linear;
`;
