import styled from "styled-components";
import {
  BackgroundProperties,
  EdgeProperties,
  PositionProperties,
  SizingProperties,
  SpacingProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";
import { Box } from "../box";

export interface CardProps
  extends SizingProperties,
    SpacingProperties,
    BackgroundProperties,
    EdgeProperties,
    PositionProperties {}

const Card = styled(Box)<CardProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["padding", p.padding || p.padding === 0 || "1rem", (v) => v],
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
`;

export { Card };
