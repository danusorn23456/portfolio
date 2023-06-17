import { Card, Container, Image, Section, Stack, Text } from "~/components";
import guitarImage from "../../../assets/guitar.jpeg";

export interface AboutMeProps {}

function AboutMe({}: AboutMeProps) {
  return (
    <Section name="about-me">
      <Container>
        <Stack
          height={"100vh"}
          direction={{ mobile: "column-reverse", tablet: "row" }}
          alignItems={{ tablet: "center" }}
          justifyContent={{ mobile: "center", tablet: "flex-start" }}
        >
          <Stack as={"header"}>
            <Text
              variant="h1"
              as={"h2"}
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Hello it's me Danusorn
            </Text>
            <Text as="h1">
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
              love to coding and sharing my knowledge of web technologies with
              others
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
          <Stack alignItems="center" justifyContent="center" flex={1}>
            <Card padding={0}>
              <Image maxWidth="300px" src={guitarImage} />
            </Card>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export { AboutMe };
