import { CSSProperties } from "react";
import styled from "styled-components";
import { DeviceObject } from "~/theme";
import { SizingProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";

export type GridProps = SizingProperties & {
  cols?: CSSProperties["gridTemplateColumns"] | DeviceObject;
  gap?: CSSProperties["gap"] | "auto";
};

const Grid = styled.div<GridProps>`
  display: grid;
  ${(p) =>
    mediaCSSBuilder([
      ["width", p.width, (v) => v || "100%"],
      ["max-width", p.width, (v) => v],
      ["height", p.width, (v) => v],
      ["max-height", p.width, (v) => v],
    ])}
  ${(p) =>
    mediaCSSBuilder([
      ["gap", p.gap, (v) => v === "auto" && "2rem"],
      ["grid-template-columns", p.cols, (v) => `repeat(${v},1fr)`],
    ])}
`;

export { Grid };
