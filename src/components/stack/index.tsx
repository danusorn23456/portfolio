import styled from "styled-components";
import {
  FlexProperties,
  PositionProperties,
  SizingProperties,
  SpacingProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface StackProps
  extends SizingProperties,
    SpacingProperties,
    PositionProperties,
    FlexProperties {
  align?: FlexProperties["alignItems"];
  justify?: FlexProperties["justifyContent"];
  gap?: SpacingProperties["space"];
  wrap?: FlexProperties["flexWrap"];
}

const Stack = styled.div<StackProps>`
  display: flex;
  ${(p) =>
    mediaCSSBuilder([
      ["flex-wrap", p.wrap, (v) => v],
      ["position", p.position, (v) => v],
      ["flex", p.flex, (v) => v],
      ["min-width", p.minWidth, (v) => v],
      ["width", p.width || "100%", (v) => v],
      ["max-width", p.width, (v) => v],
      ["min-height", p.minHeight, (v) => v],
      ["height", p.height, (v) => v],
      ["max-height", p.maxHeight, (v) => v],
      ["flex-direction", p.direction || "column", (v) => v],
      ["align-items", p.align || "flexStart", (v) => v],
      ["justify-content", p.justify || "flex-start", (v) => v],
    ])}
  & > * {
    ${({ spaceX, spaceY, gap }) =>
      mediaCSSBuilder([
        ["margin-top", spaceY === "auto" ? "2rem" : spaceY || gap, (v) => v],
        ["margin-right", spaceX === "auto" ? "2rem" : spaceX || gap, (v) => v],
      ])}
  }
`;

export { Stack };
