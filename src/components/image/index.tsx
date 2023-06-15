import { motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";

export interface ImageProps {
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
  maxHeight?: CSSProperties["maxWidth"];
  height?: CSSProperties["height"];
  ratio?: CSSProperties["aspectRatio"];
  fit?: CSSProperties["objectFit"];
}

const Image = styled(motion.img)<ImageProps>`
  width: ${(p) => p.width || "100%"};
  height: ${(p) => p.height || "auto"};
  max-width: ${(p) => p.maxWidth || "unset"};
  max-height: ${(p) => p.maxHeight || "unset"};
  object-fit: ${(p) => p.fit || "cover"};
  aspect-ratio: ${(p) => p.ratio || "unset"};
  display: block;
`;

export { Image };
