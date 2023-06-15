import { motion } from "framer-motion";
import { CSSProperties } from "react";
import styled from "styled-components";

export interface GradientTextProps extends CSSProperties {
  size?: CSSProperties["fontSize"];
}

const GradientText = styled(motion.p)<GradientTextProps>`
  font-size: ${(p) => p.size || "unset"};
  background: linear-gradient(
    45deg,
    var(--primary-base) 0%,
    var(--secondary-base) 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { GradientText };
