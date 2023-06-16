import { Layout } from "~/layout";
import { AboutMe, Experience, Projects, Skills } from "./sections";

export interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <Layout>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </Layout>
  );
}

export { Home };
