import { CSSProperties } from "react";
import styled from "styled-components";
import { DeviceObject } from "~/theme";
import { SizingProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";
import { Box } from "../box";

export type GridProps = SizingProperties & {
  cols?: CSSProperties["gridTemplateColumns"] | DeviceObject;
  gap?: CSSProperties["gap"] | "auto";
};

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${(p) =>
    mediaCSSBuilder([
      ["gap", p.gap === "auto" ? "2rem" : p.gap, (v) => v],
      ["grid-template-columns", p.cols, (v) => `repeat(${v},1fr)`],
    ])}
`;

export { Grid };
