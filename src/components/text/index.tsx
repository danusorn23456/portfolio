import styled, { css } from "styled-components";
import { TextProperties, TextVariant } from "~/type";
import { CSSBuilderValue, mediaCSSBuilder } from "~/utils";
import { Box } from "../box";

export interface TextProps extends TextProperties {}

const fontSizeMap: Record<TextVariant, CSSBuilderValue> = {
  h1: {
    mobile: "1.4rem",
    laptop: "1.8rem",
  },
  h2: {
    mobile: "1.4rem",
    laptop: "1.6rem",
  },
  h3: {
    mobile: "1.125rem",
    laptop: "1.2rem",
  },
  h4: {
    mobile: "1rem",
    laptop: "1.2rem",
  },
  p: {
    mobile: "0.875rem",
    laptop: "1rem",
  },
  label: {
    mobile: "0.875rem",
    laptop: "0.875rem",
  },
  a: {
    mobile: "0.8rem",
    laptop: "1rem",
  },
  span: "inherit",
};

const Text = styled(Box)<TextProps>`
  width: fit-content;
  line-height: 140%;
  ${(p) =>
    mediaCSSBuilder([
      ["color", p.color || "var(--black)", (v) => v],
      ["text-align", p.textAlign || "left", (v) => v],
      ["font-size", p.fontSize || fontSizeMap[p.variant || "p"], (v) => v],
      [
        "font-weight",
        p.weight ||
        ["h1", "h2", "h3", "h4", "a"].some((predict) => predict === p.variant)
          ? "bold"
          : "normal",
        (v) => v,
      ],
    ])}
  ${(p) =>
    p.gradient &&
    css`
      background: linear-gradient(to right, ${p.gradient.join(",")});
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `};
`;

export { Text };
