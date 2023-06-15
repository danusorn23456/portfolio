import { HTMLAttributes } from "react";
import styled from "styled-components";
import { size } from "~/theme";
import { mediaCSSBuilder } from "~/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  noPad?: boolean;
}

const Container = styled.div<ContainerProps>`
  height: 100%;
  width: 100%;
  padding: ${({ noPad }) => (noPad ? 0 : "0 26px 0 12px")};
  margin: 0 auto;
  ${mediaCSSBuilder([
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
