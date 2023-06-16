import { CSSProperties, forwardRef, useEffect } from "react";
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
  z-index: ${(p) => p.zIndex || 1100};
  height: 100vh;
  overflow: auto;
  position: fixed;
  inset: 0;
  background: ${(p) =>
    p.transparent ? "transparent" : p.background || "var(--white)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: ${(p) => (p.transparent ? "none" : "auto")};
`;

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ onClose, escapeToClose, clickToClose, ...rest }, ref) => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

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
        ref={ref}
        onClick={clickToClose && onClose ? onClose : () => null}
        {...rest}
      />,
      document.body,
      rest.key
    );
  }
);

export { Overlay };
