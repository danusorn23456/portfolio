import { CSSProperties } from "react";

export type SizingProperties = {
  minWidth?: CSSProperties["minWidth"];
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
  minHeight?: CSSProperties["minHeight"];
  height?: CSSProperties["height"];
  maxHeight?: CSSProperties["maxHeight"];
};

export type ImageProperties = {
  ratio?: CSSProperties["aspectRatio"];
  fit?: CSSProperties["objectFit"];
  objectPosition?: CSSProperties["objectPosition"];
};

export type BackgroundProperties = {
  background?: CSSProperties["background"];
  backdropFilter?: CSSProperties["backdropFilter"];
  backgroundClip?: CSSProperties["backgroundClip"];
};

export type TextVariant = "h1" | "h2" | "h3" | "p";

export type TextProperties = {
  variant?: TextVariant;
  fontSize?: CSSProperties["fontSize"];
  family?: CSSProperties["fontFamily"];
  weight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
  textFillColor?: CSSProperties["WebkitTextFillColor"];
  gradient?: string[];
};

export type EdgeProperties = {
  borderless?: boolean;
  border?: CSSProperties["border"];
  borderStyle?: CSSProperties["borderStyle"];
  borderWidth?: CSSProperties["borderWidth"];
  borderColor?: CSSProperties["borderColor"];
  outline?: CSSProperties["outline"];
};

export type SpacingProperties = {
  spaceY?: CSSProperties["margin"] | "auto";
  spaceX?: CSSProperties["margin"] | "auto";
  space?: CSSProperties["margin"] | "auto";
};

export type PositionProperties = {
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
};

export type FlexProperties = {
  flex?: CSSProperties["flex"];
  shrink?: CSSProperties["flexShrink"];
  glow?: CSSProperties["flexGrow"];
};
