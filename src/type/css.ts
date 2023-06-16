import { CSSProperties } from "react";
import { CSSBuilderValue } from "~/utils";

export type SizeVariant = "sm" | "md" | "lg";
export type StatusVariant =
  | "notice"
  | "positive"
  | "negative"
  | "info"
  | "normal";
export type SizingProperties = {
  minWidth?: CSSBuilderValue | CSSProperties["minWidth"];
  width?: CSSBuilderValue | CSSProperties["width"];
  maxWidth?: CSSBuilderValue | CSSProperties["maxWidth"];
  minHeight?: CSSBuilderValue | CSSProperties["minHeight"];
  height?: CSSBuilderValue | CSSProperties["height"];
  maxHeight?: CSSBuilderValue | CSSProperties["maxHeight"];
};

export type ImageProperties = {
  grayscale?: string;
  ratio?: CSSBuilderValue | CSSProperties["aspectRatio"];
  fit?: CSSBuilderValue | CSSProperties["objectFit"];
  objectPosition?: CSSBuilderValue | CSSProperties["objectPosition"];
};

export type BackgroundProperties = {
  background?: CSSBuilderValue | CSSProperties["background"];
  backdropFilter?: CSSBuilderValue | CSSProperties["backdropFilter"];
  backgroundClip?: CSSBuilderValue | CSSProperties["backgroundClip"];
};

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "label"
  | "a"
  | "p"
  | "span";

export type TextProperties = {
  variant?: TextVariant;
  fontSize?: CSSBuilderValue | CSSProperties["fontSize"];
  family?: CSSBuilderValue | CSSProperties["fontFamily"];
  weight?: CSSBuilderValue | CSSProperties["fontWeight"];
  textAlign?: CSSBuilderValue | CSSProperties["textAlign"];
  textFillColor?: CSSBuilderValue | CSSProperties["WebkitTextFillColor"];
  gradient?: string[];
};

export type EdgeProperties = {
  borderless?: boolean;
  border?: CSSBuilderValue | CSSProperties["border"];
  borderStyle?: CSSBuilderValue | CSSProperties["borderStyle"];
  borderWidth?: CSSBuilderValue | CSSProperties["borderWidth"];
  borderColor?: CSSBuilderValue | CSSProperties["borderColor"];
  outline?: CSSBuilderValue | CSSProperties["outline"];
};

export type SpacingProperties = {
  padding?: CSSBuilderValue | CSSProperties["padding"];
  margin?: CSSBuilderValue | CSSProperties["padding"];
  spaceY?: CSSBuilderValue | CSSProperties["margin"] | "auto";
  spaceX?: CSSBuilderValue | CSSProperties["margin"] | "auto";
  space?: CSSBuilderValue | CSSProperties["margin"] | "auto";
};

export type TransformProperties = {
  transform?: CSSBuilderValue | CSSProperties["transform"];
  scale?: CSSBuilderValue | CSSProperties["scale"];
  rotate?: CSSBuilderValue | CSSProperties["rotate"];
};

export type PositionProperties = {
  position?: CSSBuilderValue | CSSProperties["position"];
  top?: CSSBuilderValue | CSSProperties["top"];
  right?: CSSBuilderValue | CSSProperties["right"];
  bottom?: CSSBuilderValue | CSSProperties["bottom"];
  left?: CSSBuilderValue | CSSProperties["left"];
};

export type FlexProperties = {
  flex?: CSSBuilderValue | CSSProperties["flex"];
  direction?: CSSBuilderValue | CSSProperties["flexDirection"];
  flexWrap?: CSSBuilderValue | CSSProperties["flexWrap"];
  shrink?: CSSBuilderValue | CSSProperties["flexShrink"];
  glow?: CSSBuilderValue | CSSProperties["flexGrow"];
  justifyContent?: CSSBuilderValue | CSSProperties["justifyContent"];
  alignItems?: CSSBuilderValue | CSSProperties["alignItems"];
};
