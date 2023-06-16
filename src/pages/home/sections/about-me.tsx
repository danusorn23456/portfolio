import { Container, Section, Stack, Text } from "~/components";

export interface AboutMeProps {}

function AboutMe({}: AboutMeProps) {
  return (
    <Section name="about-me">
      <Container>
        <Stack
          height={"100vh"}
          direction={{ mobile: "column", tablet: "row" }}
          alignItems={{ tablet: "center" }}
          justifyContent={{ mobile: "center", tablet: "flex-start" }}
        >
          <Stack>
            <Text
              variant="h2"
              as={"h2"}
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Human, GUITAR
            </Text>
            <Text>
              i am a{" "}
              <Text
                as="span"
                gradient={["var(--primary-base)", "var(--secondary-base)"]}
              >
                passionate frontend developer,
              </Text>{" "}
              who is dedicated to
              <br />
              creating and maintaining exceptional web interfaces
              <br />
              love to sharing my knowledge of web technologies with others
              <br />
              and als{" "}
              <Text
                as="span"
                gradient={["var(--primary-base)", "var(--secondary-base)"]}
              >
                actively engaged throughout the day.
              </Text>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export { AboutMe };
