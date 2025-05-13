import { FixedSizeList as List } from "react-window";
import { CSSProperties, useEffect, useRef } from "react";
import styled from "@emotion/styled";

export function RollingBanner(props: {
  width: number;
  className?: string;
  imageList: string[];
}) {
  const { width, className, imageList } = props;
  const listRef = useRef<List | null>(null); // ✅ useRef 타입 수정

  useEffect(() => {
    let offset = 0;
    const speed = 2; // ✅ 이동 속도
    const interval = setInterval(() => {
      if (listRef.current) {
        offset += speed;
        listRef.current.scrollTo(offset); // ✅ 올바른 scrollTo 사용
      }
    }, 30); // ✅ 프레임 속도

    return () => clearInterval(interval);
  }, []);

  return (
    <List
      ref={listRef}
      height={200} // ✅ 컨테이너 높이
      width={width} // ✅ 화면 전체 너비 사용
      itemCount={Infinity} // ✅ 무한 개수처럼 보이게 설정
      itemSize={250} // ✅ 각 아이템 크기
      layout="horizontal" // ✅ 가로 방향 스크롤
      className={className}
      style={{ scrollbarWidth: "none" }}
    >
      {({ index, style }) => (
        <Row index={index} style={style} imageList={imageList} />
      )}
    </List>
  );
}

function Row(props: {
  index: number;
  imageList: string[];
  style: CSSProperties;
}) {
  const { index, imageList, style } = props;
  return (
    <SlideBox style={style}>
      <StyledImage src={imageList[index % imageList.length]} alt="" />
    </SlideBox>
  );
}

const SlideBox = styled.div`
  width: 250px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledImage = styled.img`
  width: 150px;
`;
