import styled from "styled-components";
import {
  BackgroundProperties,
  EdgeProperties,
  SizingProperties,
  SpacingProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface CardProps
  extends SizingProperties,
    SpacingProperties,
    BackgroundProperties,
    EdgeProperties {}

const Card = styled.div<CardProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["padding", p.padding || p.padding === 0 || "0.3rem", (v) => v],
      ["min-width", p.minWidth, (v) => v],
      ["width", p.width, (v) => v],
      ["max-width", p.maxWidth, (v) => v],
      ["min-height", p.minHeight, (v) => v],
      ["height", p.height, (v) => v],
      ["max-height", p.maxHeight, (v) => v],
    ])}
  ${(p) =>
    !p.borderless &&
    mediaCSSBuilder([
      ["border-width", p.borderWidth || "1px", (v) => v],
      ["border-color", p.borderWidth || "var(--black)", (v) => v],
      ["border-style", p.borderStyle || "solid", (v) => v],
    ])}
  border-radius: 0.375rem;
  overflow: hidden;
  cursor: pointer;
`;

export { Card };
