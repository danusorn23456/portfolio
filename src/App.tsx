import {
  Page,
  Section,
  Container,
  Text,
  Stack,
  Card,
  Image,
  Grid,
  Overlay,
} from "~/components";
import { ProjectItem, experience, projects, skills } from "./data";

import "./style/index.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function AnimatedSVG() {
  return (
    <Overlay zIndex={-1} key="animated-screen" transparent>
      <Container position="relative">
        <motion.div
          style={{
            opacity: 0.3,
            top: "calc(50% - 90px)",
            left: "calc(50% - 90px)",
            translateX: `var(--scroll-width)`,
            zIndex: -1,
            position: "absolute",
          }}
        >
          <motion.svg
            animate={{
              rotate: 360,
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            width={120}
            height={120}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#animate-svg-gradient)"
          >
            <defs>
              <linearGradient id="animate-svg-gradient">
                <stop offset="0%" stopColor="var(--primary-base)" />
                <stop offset="50%" stopColor="var(--secondary-base)" />
              </linearGradient>
            </defs>
            <motion.path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" />
            <motion.path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" />
          </motion.svg>
        </motion.div>
      </Container>
    </Overlay>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>();
  const gradienVar = ["var(--primary-base) 0%", "var(--secondary-base) 50%"];

  function clearSelectedProject() {
    setSelectedProject(null);
  }

  return (
    <Page
      initial={{ y: 100, opacity: 0, overflow: "hidden" }}
      animate={{
        y: 0,
        opacity: 1,
        overflow: "auto",
      }}
      className="dark"
    >
      <AnimatedSVG />
      <AnimatePresence presenceAffectsLayout={false}>
        {selectedProject ? (
          <Overlay
            clickToClose={true}
            escapeToClose={true}
            onClose={clearSelectedProject}
            key={selectedProject.name}
            onKeyPress={(e) => e.key === "Escape" && clearSelectedProject()}
            layoutId={`${selectedProject.name}`}
          >
            <Container>
              <Stack align="center" spaceY={"auto"}>
                <Image maxWidth={"300px"} src={selectedProject.imageSrc} />
                <Text>{selectedProject.paragraph}</Text>
              </Stack>
            </Container>
          </Overlay>
        ) : (
          <></>
        )}
      </AnimatePresence>
      <Section name="about-me">
        <Container>
          <Stack
            height={"100vh"}
            direction={{ mobile: "column", tablet: "row" }}
            justify="center"
            align="center"
          >
            <Stack>
              <Text variant="h2" as={"h2"} gradient={gradienVar}>
                Human, GUITAR
              </Text>
              <Text>
                i am a{" "}
                <Text as="span" gradient={gradienVar}>
                  passionate frontend developer,
                </Text>{" "}
                who is dedicated to
                <br />
                creating and maintaining exceptional web interfaces
                <br />
                love to sharing my knowledge of web technologies with others
                <br />
                and als{" "}
                <Text as="span" gradient={gradienVar}>
                  actively engaged throughout the day.
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Section>
      <Stack spaceY={"15rem"}>
        <Section name="tool">
          <Container>
            <Stack position="relative" minHeight={"100vh"} spaceY={"auto"}>
              <Text variant="h2" as={"h2"} gradient={gradienVar}>
                skills
              </Text>
              <Grid cols={{ mobile: 1, tablet: 2, laptop: 4 }} gap={"auto"}>
                {skills.map(({ category, items }, index) => (
                  <Stack key={index} style={{ width: "100%" }} spaceY={"1rem"}>
                    <Text variant="h3" as="h3" gradient={gradienVar}>
                      {category}
                    </Text>
                    <Stack spaceY={"1rem"} as="ul">
                      {items.map(({ title }, index) => (
                        <Text
                          key={index}
                          style={{ marginLeft: "1.25rem" }}
                          as="li"
                        >
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
        <Section name="experience">
          <Container>
            <Stack spaceY="auto">
              <Text variant="h2" as={"h2"} gradient={gradienVar}>
                experience
              </Text>
              {experience.map((exp, index) => (
                <Stack
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  spaceY={"0.5rem"}
                >
                  <Text as="sub">{exp.date}</Text>
                  <Card
                    background="rgba(125, 125, 125, 0.1)"
                    backdropFilter="blur(4px)"
                  >
                    <Stack spaceY={"0.5rem"}>
                      <Stack>
                        <Text role="h2" as="h2" gradient={gradienVar}>
                          {exp.company}
                        </Text>
                        <Text>{exp.role}</Text>
                      </Stack>
                      <Text>{exp.description}</Text>
                    </Stack>
                  </Card>
                </Stack>
              ))}
            </Stack>
          </Container>
        </Section>
        <Section name="project">
          <Container>
            <Stack spaceY={"auto"}>
              <Text variant="h2" as={"h2"} gradient={gradienVar}>
                my favorite project
              </Text>
              <Grid gap="auto" cols={{ mobile: 2, laptop: 3 }}>
                {projects.map((project, index) => (
                  <Card
                    borderless
                    key={index}
                    layoutId={`${project.name}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      ratio={"1/1"}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      src={project.imageSrc}
                    />
                    <Stack>
                      <Text as="h3">{project.name}</Text>
                    </Stack>
                  </Card>
                ))}
              </Grid>
            </Stack>
          </Container>
        </Section>
      </Stack>
    </Page>
  );
}

export default App;
