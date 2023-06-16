import { motion } from "framer-motion";
import styled from "styled-components";
import { BackgroundProperties, EdgeProperties, SizingProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface CardProps
  extends SizingProperties,
    BackgroundProperties,
    EdgeProperties {}

const Card = styled(motion.div)<CardProps>`
  ${(p) =>
    mediaCSSBuilder([
      ["width", p.width, (v) => v],
      ["border-width", p.borderWidth, (v) => v || "1px"],
      ["border-color", p.borderColor, (v) => v || "white"],
      ["border-style", p.borderStyle, (v) => v || "solid"],
    ])}
  padding: ${(p) => (p.borderless ? 0 : 0.875)}rem;
  border-radius: 0.375rem;
  overflow: hidden;
  cursor: pointer;
`;

export { Card };
