import { motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";
import { DeviceObject, device } from "~/theme";
import { mediaCSSBuilder } from "~/utils";

export interface StackProps {
  flex?: CSSProperties["flex"];
  height?: CSSProperties["height"];
  width?: CSSProperties["height"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: "row" | "column" | DeviceObject<"row" | "column">;
  spacingY?: CSSProperties["margin"] | "auto";
}

const Stack = styled(motion.div)<StackProps>`
  display: flex;
  ${(p) =>
    mediaCSSBuilder([
      ["flex", p.flex, (v) => v],
      ["width", p.width, (v) => v || "100%"],
      ["height", p.height, (v) => v || "auto"],
      ["flex-direction", p.direction, (v) => v || "column"],
      ["align-items", p.align, (v) => v || "flex-start"],
      ["justify-content", p.justify, (v) => v || "flex-start"],
    ])}
  & > *:not(:first-child) {
    ${(p) =>
      mediaCSSBuilder([
        ["margin-top", p.spacingY, (v) => (v === "auto" ? "2rem" : v)],
      ])}
  }
`;

export { Stack };
