import styled, { CSSProperties } from "styled-components";
import { DeviceObject } from "~/theme";
import { SizingProperties, SpacingProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface StackProps extends SizingProperties, SpacingProperties {
  flex?: CSSProperties["flex"];
  position?: CSSProperties["position"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: "row" | "column" | DeviceObject<"row" | "column">;
}

const Stack = styled.div<StackProps>`
  display: flex;
  ${(p) =>
    mediaCSSBuilder([
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
  & > *:not(:first-child) {
    ${(p) =>
      mediaCSSBuilder([
        ["margin-top", p.spaceY === "auto" ? "2rem" : p.spaceY, (v) => v],
        ["margin-left", p.spaceX === "auto" ? "2rem" : p.spaceX, (v) => v],
      ])}
  }
`;

export { Stack };
