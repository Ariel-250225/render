import { ReactNode } from "react";

export interface FuncItemProps {
  className?: string;
  label: ReactNode;
  isActive?: boolean;
  func: () => void;
  inActiveBackgroundColor?: string;
  activeBackgroundColor?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
}

export interface AppProps {
  className?: string;
  width?: number;
  height?: number;
  icon: ReactNode;
  label: ReactNode;
  isActive?: boolean;
  func: () => void;
  inActiveBackgroundColor?: string;
  activeBackgroundColor?: string;
  caseWidth?: string;
}
