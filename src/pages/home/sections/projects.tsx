import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  Container,
  Grid,
  Image,
  Overlay,
  Section,
  Stack,
  Text,
} from "~/components";
import { ProjectItem, projects } from "~/data";

export interface ProjectsProps {}

const MotionCard = motion(Card);
const MotionImage = motion(Image);
const MotionOverlay = motion(Overlay);

function Projects({}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>();

  function clearSelectedProject() {
    setSelectedProject(null);
  }

  return (
    <Section name="project">
      <AnimatePresence presenceAffectsLayout={false}>
        {selectedProject ? (
          <MotionOverlay
            key={selectedProject.name}
            clickToClose={true}
            escapeToClose={true}
            onClose={clearSelectedProject}
            layoutId={`${selectedProject.name}`}
          >
            <Container>
              <Stack align="center" spaceY={"auto"}>
                <Image maxWidth={"300px"} src={selectedProject.imageSrc} />
                <Text>{selectedProject.paragraph}</Text>
              </Stack>
            </Container>
          </MotionOverlay>
        ) : (
          <></>
        )}
      </AnimatePresence>
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
          <Grid gap="auto" cols={{ mobile: 1, tablet: 2 }}>
            {projects.map((project, index) => (
              <Stack>
                <MotionCard
                  key={index}
                  cursor="pointer"
                  position={"relative"}
                  padding={0}
                  layoutId={`${project.name}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <MotionImage
                    ratio={"16/9"}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    src={project.imageSrc}
                  />
                </MotionCard>
                <Text variant="h3" as="h3" color="var(--black)" zIndex={10}>
                  {project.name}
                </Text>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

export { Projects };
