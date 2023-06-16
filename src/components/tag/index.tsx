import styled from "styled-components";
import { SizeVariant, StatusVariant } from "~/type";

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

const Tag = styled.div<TagProps>`
  list-style: none;
  white-space: nowrap;
  width: fit-content;
  border: 1px solid;
  border-radius: 100px;
  font-size: ${({ size }) => fontSizeMap[size || "md"]};
  border-color: ${({ status }) => statusColorMap[status || "normal"]};
  padding: ${({ size }) => paddingSizeMap[size || "md"]};
`;

export { Tag };
