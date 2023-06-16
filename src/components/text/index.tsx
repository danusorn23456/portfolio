import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { TextProperties, TextVariant } from "~/type";
import { CSSBuilderValue, mediaCSSBuilder } from "~/utils";

export interface TextProps extends TextProperties {}

const fontSizeMap: Record<TextVariant, CSSBuilderValue> = {
  h1: {
    mobile: "2.5rem",
    tablet: "2.25rem",
  },
  h2: {
    mobile: "2.25rem",
    tablet: "2rem",
  },
  h3: {
    mobile: "2rem",
    tablet: "1.75rem",
  },
  p: {
    mobile: "1rem",
    tablet: "0.875rem",
  },
};

const Text = styled.p<TextProps>`
  width: fit-content;
  line-height: 140%;
  ${(p) =>
    mediaCSSBuilder([
      ["text-align", p.textAlign || "left", (v) => v],
      ["font-size", p.fontSize || fontSizeMap[p.variant || "p"], (v) => v],
    ])}

  ${(p) =>
    p.gradient &&
    css`
      background: linear-gradient(to right, ${p.gradient.join(",")});
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export { Text };
