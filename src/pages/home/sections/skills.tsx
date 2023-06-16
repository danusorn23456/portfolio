import { Container, Grid, Section, Stack, Text } from "~/components";
import { skills } from "~/data";

export interface SkillsProps {}

function Skills({}: SkillsProps) {
  return (
    <Section name="skills">
      <Container>
        <Stack position="relative" minHeight={"100vh"} spaceY={"auto"}>
          <Stack direction={"row"} spaceX={"0.5rem"}>
            <Text
              variant="h2"
              as={"h2"}
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              skills
            </Text>
          </Stack>
          <Grid cols={{ mobile: 2, laptop: 4 }} gap={"auto"}>
            {skills.map(({ category, items }, index) => (
              <Stack key={index} style={{ width: "100%" }} spaceY={"1rem"}>
                <Text
                  variant="h3"
                  as="h3"
                  gradient={["var(--primary-base)", "var(--secondary-base)"]}
                >
                  {category}
                </Text>
                <Stack spaceY={"1rem"} as="ul">
                  {items.map(({ title }, index) => (
                    <Text key={index} style={{ marginLeft: "1.25rem" }} as="li">
                      {title}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

export { Skills };