import { motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";

export interface CardProps {
  borderless?: boolean;
  borderColor?: CSSProperties["borderColor"];
}

const Card = styled(motion.div)<CardProps>`
  width: 100%;
  border-style: solid;
  border-color: ${(p) => p.borderColor || "white"};
  border-width: ${(p) => (p.borderless ? 0 : 1)}px;
  padding: ${(p) => (p.borderless ? 0 : 0.875)}rem;
  border-radius: 0.375rem;
  overflow: hidden;
  cursor: pointer;
`;

export { Card };
