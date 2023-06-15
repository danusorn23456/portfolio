import { motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

export interface TextProps {
  textAlign?: CSSProperties["textAlign"];
  secondary?: boolean;
}

const Text = styled(motion.p)<TextProps>`
  text-align: ${(p) => p.textAlign || "left"};
  line-height: 140%;
`;

export { Text };
