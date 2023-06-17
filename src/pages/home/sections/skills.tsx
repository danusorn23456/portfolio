import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Section,
  Stack,
  TechStackIcon,
  TechStackName,
  Text,
} from "~/components";
import { skills } from "~/data";

export interface SkillsProps {}

const MotionStack = motion(Stack);

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
                    <MotionStack
                      key={index}
                      as="li"
                      direction="row"
                      alignItems="center"
                      spaceX={"0.5rem"}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { x: 50, opacity: 0 },
                        visible: { x: 0, opacity: 100 },
                      }}
                      transition={{
                        delay: 0.1,
                      }}
                    >
                      <TechStackIcon name={title as TechStackName} />
                      <Text as="h4">{title}</Text>
                    </MotionStack>
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
