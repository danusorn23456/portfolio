import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Box } from "../box";
import { BackgroundProperties, PositionProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface OverlayProps extends BackgroundProperties, PositionProperties {
  key: string;
  transparent?: boolean;
  clickToClose?: boolean;
  escapeToClose?: boolean;
  onClose?: () => any;
}

const StyledOverlay = styled(Box)<OverlayProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["z-index", p.zIndex || 1100, (v) => v],
      [
        "background",
        p.transparent ? "transparent" : p.background || "var(--white)",
        (v) => v,
      ],
      ["backdrop-filter", p.backdropFilter, (v) => v],
    ])}
  height: 100vh;
  overflow: auto;
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
