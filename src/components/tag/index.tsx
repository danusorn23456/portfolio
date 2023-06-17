import styled from "styled-components";
import { SizeVariant, StatusVariant } from "~/type";
import { Box } from "../box";
import { mediaCSSBuilder } from "~/utils";

export interface TagProps {
  size?: SizeVariant;
  status?: StatusVariant;
}

const fontSizeMap = {
  sm: "0.8rem",
  md: "0.9rem",
  lg: "1rem",
};

const paddingSizeMap = {
  sm: "0.125rem 0.5rem",
  md: "0.125rem 0.5rem",
  lg: "0.125rem 0.5rem",
};

const statusColorMap = {
  normal: "var(--black)",
  positive: "var(--positive-base)",
  negative: "var(--negative-base)",
  info: "var(--info-base)",
  notice: "var(--notice-base)",
};

const Tag = styled(Box)<TagProps>`
  ${(p) => mediaCSSBuilder([["width", p.width || "fit-content", (v) => v]])}
  transition: all 100ms;
  color: var(--black);
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid;
  border-radius: 100px;
  font-size: ${({ size }) => fontSizeMap[size || "md"]};
  border-color: ${({ status }) => statusColorMap[status || "normal"]};
  padding: ${({ size }) => paddingSizeMap[size || "md"]};
  user-select: none;
`;

export { Tag };
