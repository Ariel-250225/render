import styled from "@emotion/styled";
import { Button, css } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { AppProps, FuncItemProps } from "./ButtonPropsType";
import { EllipsisCase } from "../../layouts/Layouts";
import { Theme, useTheme } from "@emotion/react";

export function AppItem(props: AppProps) {
  const { className, icon, label, caseWidth, func, ...other } = props;
  const theme = useTheme();

  return (
    <AppCase theme={theme} caseWidth={caseWidth} onClick={func}>
      <IconBox theme={theme} className={className} {...other}>
        {icon}
      </IconBox>
      <AppName theme={theme} text={label} testAlign="center" width={60} />
    </AppCase>
  );
}

const AppCase = styled.div<{ theme: Theme; caseWidth?: string }>(
  ({ theme, caseWidth = "100%" }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${caseWidth};
    height: 100%;

    color: ${theme.mode.textPrimary};
  `,
);

const IconBox = styled.div<{ theme: Theme; width?: number; height?: number }>(
  ({ theme, width = 50, height = 50 }) => css`
    width: ${width}px;
    height: ${height}px;
    flex-shrink: 0;
    margin-bottom: 10px;
    border-radius: 14px;

    svg {
      width: ${width}px;
      height: ${width}px;
      fill: ${theme.mode.textPrimary};
      transition: fill 0.2s;

      &:hover {
        fill: ${theme.mode.textAccent};
      }
    }
  `,
);

const AppName = styled(EllipsisCase)<{ theme: Theme }>(
  ({ theme }) => css`
    font-family: ${theme.mode.font.app.title};
    font-size: 15px;
  `,
);

export function FuncItem(props: FuncItemProps): ReactElement {
  const { className, label, func, ...other } = props;
  const theme = useTheme();

  return (
    <StyledFuncButton
      theme={theme}
      className={className}
      onClick={func}
      {...other}
    >
      {label}
    </StyledFuncButton>
  );
}

export const StyledFuncButton = styled(Button)<{
  theme: Theme;
}>(
  ({ theme }) => css`
    background-color: ${theme.mode.buttonBackground};

    color: ${theme.mode.textPrimary};

    &:hover {
      background-color: ${theme.mode.buttonHoverBackground};
    }

    &:focus {
      outline: none;
    }

    transition: background 0.8s;
  `,
);

export function SlideButton(props: {
  className?: string;
  label: string;
  icon: ReactNode;
  backgroundColor: string;
  buttonBackgroundColor: string;
  buttonSize: { width: number; height: number };
  fontSize: number;
  iconSize: number;
  func?: () => void;
}) {
  const {
    className,
    label,
    icon,
    backgroundColor,
    buttonBackgroundColor,
    buttonSize,
    fontSize,
    iconSize,
    func,
  } = props;
  const theme = useTheme();
  return (
    <SlideButtonWrapper
      className={className}
      theme={theme}
      backgroundColor={backgroundColor}
      width={buttonSize.width}
      height={buttonSize.height}
      onClick={func}
    >
      <SlideButtonContainer
        buttonBackgroundColor={buttonBackgroundColor}
        width={buttonSize.width}
        height={buttonSize.height}
        iconSize={iconSize}
        fontSize={fontSize}
        theme={theme}
      >
        <span className="text">{label}</span>
        <div className="icon-container">
          <div className="icon icon--left">{icon}</div>
          <div className="icon icon--right">{icon}</div>
        </div>
      </SlideButtonContainer>
    </SlideButtonWrapper>
  );
}

const SlideButtonWrapper = styled("div", {
  shouldForwardProp: (prop) =>
    ![
      "backgroundColor",
      "buttonBackgroundColor",
      "width",
      "height",
      "iconSize",
      "theme",
    ].includes(prop),
})<{
  backgroundColor: string;
  width: number;
  height: number;
}>(
  ({ backgroundColor, width, height }) => css`
    width: ${width}px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor};
    border-radius: ${height}px;
  `,
);

const SlideButtonContainer = styled("div", {
  shouldForwardProp: (prop) =>
    !["buttonBackgroundColor", "width", "height", "iconSize", "theme"].includes(
      prop,
    ),
})<{
  buttonBackgroundColor: string;
  width: number;
  height: number;
  iconSize: number;
  theme: Theme;
  fontSize: number;
}>(
  ({ buttonBackgroundColor, width, height, iconSize, theme, fontSize }) => css`
      width: ${width}px;
      height: ${height}px;
      border: 0;
      position: relative;
      min-width: ${width}px;
      min-height: ${height}px;
      border-radius: ${height}px;
      font-family: ${theme.fontStyle.montserrat};
      font-weight: bold;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      
      .text{
        font-size: ${fontSize}px;
      }

      .text,
      .icon-container {
        position: relative;
        z-index: 2;
      }

      .icon-container {
        position: relative;
        width: ${iconSize}px;
        height: ${iconSize}px;
        transition: transform 500ms ease;

        .icon {
          position: absolute;
          left: 0;
          top: 0;
          width: ${iconSize}px;
          height: ${iconSize}px;
          transition:
            transform 500ms ease,
            opacity 250ms ease;

          &--left {
            transform: translateX(-200%);
            opacity: 0;
          }

          &--right {
            transform: translateX(50%);
          }

          svg {
            width: 100%;
            height: 100%;
            fill: #fff;
          }
        }
      }

      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${buttonBackgroundColor};
        border-radius: ${height}px;
        z-index: 1;
        transition: transform 500ms ease;
      }

      &:hover {
        &::after {
          transform: translateX(70%);
        }

        .icon-container {
          transform: translateX(125%);
          .icon {
            &--left {
              transform: translateX(50%);
              opacity: 1;
            }
            &--right {
              transform: translateX(200%);
              opacity: 0;
            }
          }
        }
      `,
);
