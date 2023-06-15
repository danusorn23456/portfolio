import { motion } from "framer-motion";
import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface PageProps extends HTMLAttributes<HTMLDivElement> {}

const Page = styled(motion.div)<PageProps>`
  width: 100%;
`;

export { Page };
