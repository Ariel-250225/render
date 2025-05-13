/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { css } from "@mui/material";
import { FuncItem } from "../styled/Button/Button";
import {
  CostIcon,
  GlobalIcon,
  LotteryIcon,
  MessageCircleIcon,
  TrumpIcon,
} from "../styled/icons";
import { useWindowContext } from "../../Context/WindowContext";
import {
  useProportionHook,
  useProportionSizeHook,
} from "../../hooks/useWindowHooks";
import HomeIcon from "@mui/icons-material/Home";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useLocation, useNavigate } from "react-router-dom";
import { Theme, useTheme } from "@emotion/react";
import { OPACITY_35 } from "../../Style/theme";
import { LogoText } from "../Logo/LogoIcon";

const NAV_MENU = () => {
  const theme = useTheme();
  return [
    { icon: <HomeIcon fontSize="large" />, link: "/", description: "home" },
    {
      icon: (
        <TrumpIcon
          css={css`
                        width: 30px;
                        height: 30px;
                        fill: ${theme.mode.textSecondary};

                    }
                    `}
        />
      ),
      link: "/live",
      description: "live casino",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      link: "/sports",
      description: "sports",
    },
    {
      icon: <SportsEsportsIcon fontSize="large" />,
      link: "/arcade",
      description: "mini games",
    },
    {
      icon: (
        <LotteryIcon
          css={css`
                        width: 30px;
                        height: 30px;
                        fill: ${theme.mode.textSecondary};

                    }
                    `}
        />
      ),
      link: "/stream",
      description: "mini games",
    },
  ];
};

export function Header() {
  const theme = useTheme();

  const { windowWidth } = useWindowContext();

  const svgExtent = useProportionSizeHook(
    windowWidth,
    20,
    20,
    theme.windowSize.mobile,
  );

  return (
    <HeaderWrapper theme={theme}>
      <LogoText />
      <HeaderRightFuncUnorderedList size={svgExtent.size} theme={theme}>
        <li>
          <HeaderItem
            label={<CostIcon />}
            inActiveBackgroundColor={theme.mode.cardBackground}
            activeBackgroundColor={theme.mode.cardBackground}
            width={40}
            func={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </li>
        <li>
          <HeaderItem
            label={<MessageCircleIcon />}
            inActiveBackgroundColor={theme.mode.cardBackground}
            activeBackgroundColor={theme.mode.cardBackground}
            width={40}
            func={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </li>
        <li>
          <HeaderItem
            label={<GlobalIcon />}
            inActiveBackgroundColor={theme.mode.cardBackground}
            activeBackgroundColor={theme.mode.cardBackground}
            width={40}
            func={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </li>
      </HeaderRightFuncUnorderedList>
    </HeaderWrapper>
  );
}

export const HeaderItem = styled(FuncItem)<{
  width: number;
  isActive?: boolean;
  inActiveBackgroundColor?: string;
  activeBackgroundColor?: string;
}>(
  ({ width, isActive, inActiveBackgroundColor, activeBackgroundColor }) => css`
    width: ${width}px;
    min-width: ${width}px;
    background-color: ${isActive
      ? activeBackgroundColor
      : inActiveBackgroundColor};

    &:hover {
      background-color: ${activeBackgroundColor};
    }
  `,
);

export const HeaderWrapper = styled.header<{ theme: Theme }>(
  ({ theme }) => css`
    // 항상 하위요소들의 최상위에 존재하기 위해 z-index를 추가합니다.
    z-index: 1;
    top: 0;
    position: fixed;
    width: 100%;
    box-sizing: border-box;

    background-color: ${theme.mode.cardBackground};
    padding: 0.8vh 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      gap: 1vw;

      li {
        padding: 0;
      }
    }
  `,
);

export const HeaderRightFuncUnorderedList = styled.ul<{
  theme: Theme;
  size: { width: number; height: number };
}>(
  ({ theme, size }) => css`
    font-family: ${theme.mode.font.header.menuItem};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    svg {
      width: ${size.width}px;
      height: ${size.height}px;
    }

    button {
      height: 100%;
    }
  `,
);

export function DynamicIsland() {
  const theme = useTheme();
  const { windowWidth } = useWindowContext();
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const { size } = useProportionHook(windowWidth, 580, theme.windowSize.tablet);

  useEffect(() => {
    // 페이지 이동 시 트리거
    if (location.pathname.includes("sports")) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location.pathname]);

  const listRef = useRef<HTMLLIElement>(null);

  return (
    <DynamicIslandContainer>
      <DynamicIslandUnit width={size}>
        <Nav theme={theme}>
          <NavUnitList>
            {NAV_MENU().map((item, index) => (
              <List
                key={`${index} + ${item}`}
                ref={listRef}
                width={24}
                height={24}
                theme={theme}
              >
                <ListLink onClick={() => navigate(item.link)} theme={theme}>
                  {item.icon}
                </ListLink>
              </List>
            ))}
          </NavUnitList>
        </Nav>
      </DynamicIslandUnit>
      {location.pathname.includes("sports") && (
        <StateView isActive={isVisible} theme={theme}>
          BET
        </StateView>
      )}
    </DynamicIslandContainer>
  );
}

const StateView = styled.button<{ theme: Theme; isActive: boolean }>(
  ({ theme, isActive }) => css`
    position: relative;
    display: ${isActive ? "flex" : "none"};
    width: 60px;
    height: 60px;
    background: ${theme.mode.cardBackground};
    border-radius: ${theme.borderRadius.circle};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.mode.textAccent};
    font-family: ${theme.mode.font.dynamicIsland.stateView};
    user-select: none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;

    visibility: ${isActive ? "visible" : "hidden"};
    opacity: ${isActive ? 1 : 0};
    transform: translateX(${isActive ? "0" : "-30px"}); /* ✅ 왼쪽으로 이동 */
    transition:
      opacity 0.5s ease-in-out,
      border-color 0.3s ease-in-out,
      transform 0.5s ease-in-out;

    border: 0.3mm solid ${theme.mode.textAccent};

    &:hover {
      transition-duration: 0.1s;
      outline: none;
      border: 0.3mm solid ${theme.mode.textAccent};
    }

    &:hover:after {
      // content: "";
      // display: block;
      // position: absolute;
      // border-radius: ${theme.borderRadius.circle};
      // left: 0;
      // top: 0;
      // width: 100%;
      // height: 100%;
      // opacity: 0;
      // animation: pulseEffect 1.2s infinite; /* ✅ 반복적으로 효과 적용 */
    }

    &:focus {
      outline: none;
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 4em;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.5s;
      box-shadow: 0 0 3px 15px ${theme.mode.textAccent};
    }

    &:active:after {
      box-shadow: 0 0 0 0 ${theme.mode.textAccent + "50"};
      position: absolute;
      border-radius: ${theme.borderRadius.circle};
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
    }

    &:active {
      top: 1px;
    }

    @keyframes pulseEffect {
      0% {
        opacity: 0.6;
        box-shadow: 0 0 10px 5px ${theme.mode.textAccent};
      }
      50% {
        opacity: 0.3;
        box-shadow: 0 0 20px 10px transparent;
      }
      100% {
        opacity: 0;
        box-shadow: 0 0 30px 15px transparent;
      }
    }
  `,
);

const DynamicIslandContainer = styled.article`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  bottom: 20px;

  gap: 30px;
`;

const DynamicIslandUnit = styled.section<{ width?: number }>(
  ({ width }) => css`
    width: ${width}px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul li {
      list-style: none;
      margin: 0;
      padding: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
);

const Nav = styled.nav<{ theme: Theme }>(
  ({ theme }) => css`
    border: 0.3mm solid ${theme.mode.textPrimary};
    background: ${theme.mode.cardBackground};
    border-radius: ${theme.borderRadius.appRounded};
    box-shadow: ${theme.shadowStyle.default};
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 0.3mm solid ${theme.mode.textAccent + OPACITY_35};
    }

    @media ${theme.windowSize.mobile} {
      border-radius: 0;
    }
  `,
);

const NavUnitList = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10%;
`;

const List = styled.li<{
  theme: Theme;
  width: number;
  height: number;
}>(
  ({ theme, width, height }) => css`
    position: relative;

    &:hover {
      color: ${theme.mode.textPrimary};

      svg {
        fill: ${theme.mode.textPrimary};
      }
    }

    &:before {
      content: "";
      position: absolute;
      opacity: 0;
      top: 0;
      transform: translateY(-10%);
      width: ${width + 20}px;
      height: ${height + 20}px;
      border-radius: ${theme.borderRadius.appRounded};
      transition: all 0.3s ease-in-out;
      background: ${theme.mode.textAccent + "E6"};
    }

    &:hover:before {
      opacity: 1;
    }
  `,
);

const ListLink = styled.a<{ theme: Theme }>(
  ({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${theme.mode.textSecondary};
  `,
);
