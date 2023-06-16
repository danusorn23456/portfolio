import { motion } from "framer-motion";
import styled from "styled-components";
import { ImageProperties, SizingProperties } from "~/type";
import { mediaCSSBuilder } from "~/utils";

export interface ImageProps extends SizingProperties, ImageProperties {}

const Image = styled(motion.img)<ImageProps>`
  display: block;
  ${(p) =>
    mediaCSSBuilder([
      ["min-width", p.minWidth, (v) => v],
      ["width", p.width || "100%", (v) => v],
      ["max-width", p.maxWidth, (v) => v],
      ["min-height", p.minHeight, (v) => v],
      ["height", p.height, (v) => v],
      ["max-height", p.maxHeight, (v) => v],
      ["object-fit", p.fit || "cover", (v) => v],
      ["aspect-ratio", p.ratio, (v) => v],
      ["object-position", p.objectPosition || "center", (v) => v],
    ])}
`;

export { Image };
