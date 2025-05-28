import { ReactNode } from "react";
import { css, Theme, useTheme } from "@emotion/react";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";

/** ReactNode를 받아 반응형으로 자녀요소를 모달로 띄우는 컴포넌트입니다.
 * date-area 가 이미 선언되어 있으므로 캘린더 설정 작업을 할때 디자인을 신경쓰지 않아도 됩니다.
 * */
export function CustomModal(props: {
  open: boolean;
  close: () => void;
  children: ReactNode;
  className?: string;
}) {
  const { open, close, children, className } = props;
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <AnimatedContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <ModalContainer theme={theme} className={className}>
          <CancelBox>
            <CancelIcon onClick={close} sx={{ fontSize: "30px" }} />
          </CancelBox>
          {children}
        </ModalContainer>
      </AnimatedContainer>
    </Modal>
  );
}
const CancelBox = styled.div`
  position: absolute;
  top: 4%;
  right: 2%;
  cursor: pointer;
`;

export const ModalContainer = styled.div<{ theme: Theme }>(
  ({ theme }) => css`
    position: absolute;
    bottom: 0;
    width: 80vw;
    height: 90vh;
    border-top-right-radius: ${theme.borderRadius.roundedBox};
    border-top-left-radius: ${theme.borderRadius.roundedBox};
    color: ${theme.mode.textPrimary};
    background-color: ${theme.mode.cardBackground};
    overflow-x: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 20px 20px 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${theme.deviceSize.phone} {
      width: 100%;
    }
  `,
);

const AnimatedContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1300;

  display: flex;
  justify-content: center;
`;
