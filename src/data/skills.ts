export type SkillItem = {
  category: string;
  items: { title: string }[] | [];
};
export type SkillItems = SkillItem[];

export const skills: SkillItems = [
  {
    category: "Javascript",
    items: [
      {
        title: "React",
      },
      {
        title: "Next",
      },
      {
        title: "Typescript",
      },
    ],
  },
  {
    category: "Styling",
    items: [
      {
        title: "Tailwind CSS",
      },
      {
        title: "Styled Component",
      },
      {
        title: "Material UI",
      },
      {
        title: "Ant Design",
      },
      {
        title: "SASS",
      },
    ],
  },
  {
    category: "Animation",
    items: [
      {
        title: "ThreeJS",
      },
      {
        title: "Framer Motion",
      },
      {
        title: "GSAP",
      },
    ],
  },
  {
    category: "Global State",
    items: [
      {
        title: "Recoil",
      },
      {
        title: "Redux",
      },
    ],
  },
  {
    category: "Validation",
    items: [
      {
        title: "React Hook Form",
      },
    ],
  },
  {
    category: "API",
    items: [
      {
        title: "Axios",
      },
      {
        title: "React Query",
      },
      {
        title: "Supabase",
      },
      {
        title: "Firebase",
      },
      {
        title: "Google",
      },
      {
        title: "Ebay",
      },
    ],
  },
  {
    category: "Working",
    items: [
      {
        title: "Github",
      },
      {
        title: "Gitlab",
      },
      {
        title: "Trello",
      },
      {
        title: "Jira",
      },
    ],
  },
  {
    category: "Deploy",
    items: [
      {
        title: "Vercel",
      },
    ],
  },
];
