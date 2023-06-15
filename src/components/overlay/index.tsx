import { HTMLMotionProps, motion } from "framer-motion";
import { CSSProperties, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export interface OverlayProps extends HTMLMotionProps<"div"> {
  key: string;
  zIndex?: CSSProperties["zIndex"];
  background?: CSSProperties["background"];
  transparent?: boolean;
  clickToClose?: boolean;
  escapeToClose?: boolean;
  onClose?: () => any;
}

const StyledOverlay = styled(motion.div)<OverlayProps>`
  z-index: ${(p) => p.zIndex || "unset"};
  position: fixed;
  inset: 0;
  background: ${(p) =>
    p.transparent ? "transparent" : p.background || "black"};
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: ${(p) => (p.transparent ? "none" : "auto")};
`;

function Overlay({
  onClose,
  escapeToClose,
  clickToClose,
  ...rest
}: OverlayProps) {
  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === "Escape" && onClose) {
      onClose();
    }
  }

  useEffect(
    function addKeyEvent() {
      if (!escapeToClose && !onClose) return;
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    },
    [escapeToClose, onClose]
  );

  return createPortal(
    <StyledOverlay
      onClick={clickToClose && onClose ? onClose : () => null}
      {...rest}
    />,
    document.body,
    rest.key
  );
}

export { Overlay };
