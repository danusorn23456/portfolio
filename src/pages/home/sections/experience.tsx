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
              as={"h2"}
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Experience<Text>about 2 year</Text>
            </Text>
          </Stack>
          {experience.map((exp, index) => (
            <MotionStack
              key={index}
              initial={"hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{
                delay: 0.1,
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
                      as="h3"
                      gradient={[
                        "var(--primary-base)",
                        "var(--secondary-base)",
                      ]}
                    >
                      {exp.company}
                    </Text>
                    <Text as="h3" weight={"bold"}>
                      {exp.role}
                    </Text>
                  </Stack>
                  <Text as="p">{exp.description}</Text>
                  <Text variant="label" weight="bold">
                    keywords
                  </Text>
                  <Stack as="ul" flexWrap={"wrap"} direction={"row"}>
                    {exp.tag.map((tag, index) => (
                      <Box as="li" key={index} padding={"0.15rem"}>
                        <Tag as="h4">{tag}</Tag>
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
