import { motion } from "framer-motion";
import styled from "styled-components";

export interface TextProps {
  secondary?: boolean;
}

const Text = styled(motion.p)<TextProps>`
  line-height: 140%;
`;

export { Text };
