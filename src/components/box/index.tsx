import styled from "styled-components";
import {
  BackgroundProperties,
  EdgeProperties,
  FlexProperties,
  PositionProperties,
  SizingProperties,
  SpacingProperties,
  TransformProperties,
  InteractProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface BoxProps
  extends SizingProperties,
    PositionProperties,
    BackgroundProperties,
    EdgeProperties,
    SpacingProperties,
    TransformProperties,
    InteractProperties,
    FlexProperties {
  opacity?: string | number;
}

const Box = styled.div<BoxProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["cursor", p.cursor, (v) => v],
      ["pointer-events", p.pointerEvents, (v) => v],
      ["position", p.position, (v) => v],
      ["top", p.top, (v) => v],
      ["right", p.right, (v) => v],
      ["bottom", p.bottom, (v) => v],
      ["left", p.left, (v) => v],
      ["inset", p.inset, (v) => v],
      ["z-index", p.zIndex, (v) => v],
      ["flex-wrap", p.flexWrap, (v) => v],
      ["flex", p.flex, (v) => v],
      ["flex-direction", p.direction || "column", (v) => v],
      ["align-items", p.alignItems || "flexStart", (v) => v],
      ["justify-content", p.justifyContent || "flex-start", (v) => v],
      ["opacity", p.opacity, (v) => v],
      ["min-width", p.minWidth, (v) => v],
      ["width", p.width, (v) => v],
      ["max-width", p.maxWidth, (v) => v],
      ["min-height", p.minHeight, (v) => v],
      ["height", p.height, (v) => v],
      ["max-height", p.maxHeight, (v) => v],
      ["padding", p.padding, (v) => v],
      ["margin", p.margin, (v) => v],
      ["background", p.background, (v) => v],
      ["backdrop-filter", p.backdropFilter, (v) => v],
      ["border", p.border, (v) => v],
      ["border-color", p.borderColor, (v) => v],
      ["border-style", p.borderStyle, (v) => v],
      ["border-width", p.borderWidth, (v) => v],
      ["transform", p.transform, (v) => v],
      ["scale", p.scale, (v) => v],
      ["rotate", p.rotate, (v) => v],
    ])}
`;

export { Box };
