import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface SectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  name: string;
}

const Section = styled.section<SectionProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export { Section };
