import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  Card,
  Tag,
  Container,
  Image,
  Overlay,
  Section,
  Stack,
  Text,
  Box,
} from "~/components";
import { ProjectItem, projects } from "~/data";

export interface ProjectsProps {}

const MotionCard = motion(Card);
const MotionImage = motion(Image);
const MotionOverlay = motion(Overlay);

function Projects({}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>();

  function linkRender(url: string) {
    if (!url) {
      return <Tag>not avialable</Tag>;
    } else if (url === "@private") {
      return <Tag>private</Tag>;
    }
    return (
      <Tag style={{ position: "relative" }} maxWidth="300px">
        {url}
        <a
          target="_blank"
          href={url}
          style={{ position: "absolute", inset: 0 }}
        ></a>
      </Tag>
    );
  }

  function clearSelectedProject() {
    setSelectedProject(null);
  }

  return (
    <Section name="project">
      {selectedProject ? (
        <MotionOverlay
          key={selectedProject.name}
          clickToClose={true}
          escapeToClose={true}
          onClose={clearSelectedProject}
          transparent
          backdropFilter="blur(2px)"
        >
          <Stack height="100%" justifyContent="center" padding={"1rem"}>
            <Image
              maxHeight="600px"
              fit="contain"
              style={{ margin: "0 auto" }}
              src={selectedProject.gif}
            />
          </Stack>
        </MotionOverlay>
      ) : (
        <></>
      )}
      <Container>
        <Stack spaceY={"auto"}>
          <Stack direction={"row"} spaceX={"0.5rem"}>
            <Text
              id="section-project"
              variant="h2"
              as="a"
              gradient={["var(--primary-base)", "var(--secondary-base)"]}
            >
              Projects
            </Text>
          </Stack>
          <Stack spaceY={"2rem"}>
            {projects.map((project, index) => (
              <Stack
                key={index}
                direction={{ mobile: "column", laptop: "row" }}
                spaceY={{ mobile: "1rem", laptop: 0 }}
                spaceX={"1rem"}
              >
                <Box flex={1}>
                  <MotionCard
                    borderless
                    cursor="pointer"
                    position={"relative"}
                    padding={0}
                    layoutId={`${project.name}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <MotionImage
                      initial={"hidden"}
                      whileHover={"visible"}
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                      ratio={"16/9"}
                      src={project.gif}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 4,
                        right: 4,
                        opacity: 0.5,
                        padding: "0 0.5rem",
                        color: "var(--black)",
                        background: "var(--white)",
                        borderRadius: "1rem",
                      }}
                    >
                      click to view gif
                    </div>
                  </MotionCard>
                </Box>
                <Stack flex={1}>
                  <Text
                    variant="h3"
                    as="h3"
                    zIndex={10}
                    gradient={["var(--primary-base)", "var(--secondary-base)"]}
                  >
                    {project.name}
                  </Text>
                  <Text>{project.paragraph}</Text>
                  <Stack spaceY={"0.5rem"}>
                    <Stack direction="row">
                      <Text
                        width="50px"
                        weight="bold"
                        gradient={[
                          "var(--primary-base)",
                          "var(--secondary-base)",
                        ]}
                      >
                        site
                      </Text>
                      <Text padding="0 0.5rem">:</Text>
                      {linkRender(project.site)}
                    </Stack>
                    <Stack direction="row">
                      <Text
                        width="50px"
                        weight="bold"
                        gradient={[
                          "var(--primary-base)",
                          "var(--secondary-base)",
                        ]}
                      >
                        repo
                      </Text>
                      <Text padding="0 0.5rem">:</Text>
                      {linkRender(project.repo)}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export { Projects };
