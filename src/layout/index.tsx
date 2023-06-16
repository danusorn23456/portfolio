import { ReactNode } from "react";
import {
  Box,
  Container,
  DarkModeToggle,
  Page,
  Stack,
  Text,
} from "~/components";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Page>
      <Box
        position="fixed"
        zIndex={1000}
        top={0}
        left={0}
        width="100%"
        backdropFilter="blur(2px)"
        style={{
          transform: "translateZ(100px)",
          borderBottom: "1px solid var(--black-fade)",
        }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0.25rem"
          >
            <Text
              weight="bold"
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Human Tar
            </Text>
            <DarkModeToggle />
          </Stack>
        </Container>
      </Box>
      <Stack>{children}</Stack>
    </Page>
  );
}

export { Layout };
