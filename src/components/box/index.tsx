import styled from "styled-components";
import {
  BackgroundProperties,
  EdgeProperties,
  PositionProperties,
  SizingProperties,
  SpacingProperties,
  TransformProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface BoxProps
  extends SizingProperties,
    PositionProperties,
    BackgroundProperties,
    EdgeProperties,
    SpacingProperties,
    TransformProperties {}

const Box = styled.div<BoxProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["min-width", p.minWidth, (v) => v],
      ["width", p.width, (v) => v],
      ["max-width", p.maxWidth, (v) => v],
      ["min-height", p.minHeight, (v) => v],
      ["height", p.height, (v) => v],
      ["max-height", p.maxHeight, (v) => v],
      ["position", p.position, (v) => v],
      ["padding", p.padding, (v) => v],
      ["margin", p.padding, (v) => v],
      ["background", p.background, (v) => v],
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
