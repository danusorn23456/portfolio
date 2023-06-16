import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Box } from "../box";

export interface PageProps extends HTMLAttributes<HTMLDivElement> {}

const Page = styled(Box)<PageProps>`
  width: 100%;
`;

export { Page };
