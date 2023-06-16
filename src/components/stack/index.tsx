import styled from "styled-components";
import {
  BackgroundProperties,
  FlexProperties,
  PositionProperties,
  SizingProperties,
  SpacingProperties,
} from "~/type";
import { mediaCSSBuilder } from "~/utils";
import { Box } from "../box";

export interface StackProps
  extends SizingProperties,
    BackgroundProperties,
    SpacingProperties,
    PositionProperties,
    FlexProperties {
  align?: FlexProperties["alignItems"];
  justify?: FlexProperties["justifyContent"];
  gap?: SpacingProperties["space"];
  wrap?: FlexProperties["flexWrap"];
}

const Stack = styled(Box)<StackProps>`
  display: flex;
  & > * {
    ${({ spaceX, spaceY, gap }) =>
      (gap || spaceX || spaceY) &&
      mediaCSSBuilder([
        ["margin-top", spaceY === "auto" ? "2rem" : spaceY || gap, (v) => v],
        ["margin-right", spaceX === "auto" ? "2rem" : spaceX || gap, (v) => v],
      ])}
  }
`;

export { Stack };
