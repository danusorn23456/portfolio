import {
  Box,
  Card,
  Container,
  Image,
  Section,
  Stack,
  Text,
} from "~/components";
import guitarImage from "../../../assets/guitar.jpeg";
import { SiGmail, SiGithub } from "react-icons/si";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import resumePDF from "../../../assets/resume.pdf";

export interface AboutMeProps {}
const MotionBox = motion(Box);
function AboutMe({}: AboutMeProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  async function downloadResume() {
    await fetch(resumePDF).then((response) => {
      const memoLinkId = "memo-link";
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let linkNode = document.getElementById(memoLinkId) as HTMLAnchorElement;
        if (!linkNode) {
          linkNode = document.createElement("a");
          linkNode.id = "temp-link";
          linkNode.style.display = "none";
        }
        linkNode.href = fileURL;
        linkNode.download = "danusorn-resume.pdf";
        linkNode.click();
      });
    });
  }

  useEffect(() => {}, [isInView]);

  return (
    <Section name="about-me">
      <MotionBox
        initial="hidden"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        animate={isInView ? "hidden" : "visible"}
        position="fixed"
        top={"2rem"}
        left={0}
        width="100%"
        padding="0.7rem 0"
        zIndex={1000}
      >
        <Stack
          direction="row"
          spaceX="0.5rem"
          alignItems="center"
          justifyContent="center"
        >
          <a
            target="_blank"
            style={{
              color: "var(--black)",
              border: "1px solid var(--black-fade)",
              borderTop: "none",
              padding: "0.25rem 0.5rem",
              backdropFilter: "blur(2px)",
              borderBottomRightRadius: "0.5rem",
              borderBottomLeftRadius: "0.5rem",
            }}
            href="mailto:danusorn23456@gmail.com"
          >
            danusorn23456@gmail.com
          </a>
        </Stack>
      </MotionBox>
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
            <Stack margin="1rem 0 0 0" as="address">
              <Text
                as="p"
                gradient={["var(--primary-base)", "var(--secondary-base)"]}
              >
                more info
              </Text>
              <Stack spaceY="0.5rem">
                <Stack direction="row" spaceX="0.5rem">
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--black)",
                      translate: "0 2px",
                    }}
                  >
                    <SiGmail />
                  </span>
                  <a
                    ref={containerRef}
                    target="_blank"
                    style={{ color: "var(--black)" }}
                    href="mailto:danusorn23456@gmail.com"
                  >
                    danusorn23456@gmail.com
                  </a>
                </Stack>
                <Stack direction="row" spaceX="0.5rem">
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--black)",
                      translate: "0 2px",
                    }}
                  >
                    <SiGithub />
                  </span>
                  <a
                    target="_blank"
                    style={{ color: "var(--black)" }}
                    href="https://github.com/danusorn23456?tab=repositories"
                  >
                    danusorn23456
                  </a>
                </Stack>
                <Stack direction="row" spaceX="0.5rem">
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--black)",
                      translate: "0 2px",
                    }}
                  >
                    <BsFillFileEarmarkPdfFill />
                  </span>
                  <button
                    style={{
                      fontSize: "1rem",
                      color: "var(--black)",
                      background: "none",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={downloadResume}
                  >
                    download resume
                  </button>
                </Stack>
              </Stack>
            </Stack>
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
