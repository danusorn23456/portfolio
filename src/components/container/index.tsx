import { CSSProperties, HTMLAttributes } from "react";
import styled from "styled-components";
import { size } from "~/theme";
import { mediaCSSBuilder } from "~/utils";
import { Box } from "../box";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  position?: CSSProperties["position"];
  noPad?: boolean;
}

const Container = styled(Box)<ContainerProps>`
  width: 100%;
  padding: ${({ noPad }) => (noPad ? 0 : "0 22px 0 22px")};
  margin: 0 auto;
  ${(p) =>
    mediaCSSBuilder([
      [
        "max-width",
        {
          mobile: "100%",
          tablet: size.laptop,
          laptop: size.desktop,
        },
        (v) => v,
      ],
    ])}
`;

export { Container };
