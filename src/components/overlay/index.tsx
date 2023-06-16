import { CSSProperties, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Box } from "../box";

export interface OverlayProps {
  key: string;
  zIndex?: CSSProperties["zIndex"];
  background?: CSSProperties["background"];
  transparent?: boolean;
  clickToClose?: boolean;
  escapeToClose?: boolean;
  onClose?: () => any;
}

const StyledOverlay = styled(Box)<OverlayProps>`
  z-index: ${(p) => p.zIndex || "unset"};
  position: fixed;
  inset: 0;
  background: ${(p) =>
    p.transparent ? "transparent" : p.background || "var(--white)"};
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
