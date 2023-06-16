import { motion } from "framer-motion";

import { Box, Card, Container, Section, Stack, Tag, Text } from "~/components";
import { experience } from "~/data";

export interface ExperienceProps {}

const MotionStack = motion(Stack);

function Experience({}: ExperienceProps) {
  return (
    <Section name="experience">
      <Container>
        <Stack spaceY="auto">
          <Stack direction={"row"} spaceX={"0.5rem"}>
            <Text
              id="section-experience"
              variant="h2"
              as={"a"}
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Experience
            </Text>
          </Stack>
          {experience.map((exp, index) => (
            <MotionStack
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              spaceY={"0.5rem"}
            >
              <Text variant="label" as="p">
                {exp.date}
              </Text>
              <Card
                background="rgba(125, 125, 125, 0.1)"
                backdropFilter="blur(4px)"
              >
                <Stack spaceY={"0.5rem"}>
                  <Stack>
                    <Text
                      variant="h3"
                      as="h2"
                      gradient={[
                        "var(--primary-base)",
                        "var(--secondary-base)",
                      ]}
                    >
                      {exp.company}
                    </Text>
                    <Text weight={"bold"}>{exp.role}</Text>
                  </Stack>
                  <Text>{exp.description}</Text>
                  <Text variant="label" weight="bold">
                    keywords
                  </Text>
                  <Stack as="ul" flexWrap={"wrap"} direction={"row"}>
                    {exp.tag.map((tag, index) => (
                      <Box key={index} padding={"0.15rem"}>
                        <Tag as="li">{tag}</Tag>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </MotionStack>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}

export { Experience };
