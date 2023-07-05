export type ExpereinceItem = {
  company: string;
  role: string;
  description: string;
  date: string;
  tag: string[] | [];
};

export type ExpereinceItems = ExpereinceItem[];

const experience: ExpereinceItems = [
  {
    company: "QBox Point",
    role: "frontend developer",
    description: `create an interactive user interface for a web
    application. Refactoring the structure of a web component
    theme, working with a content management system, dealing
    with complicated data validation and data visualization,
    and maintaining data caching for the supply chain service
    at each stage of the work we undertake with the Jira
    software task tracker.`,
    date: "Jun 2021 - Jun 2022",
    tag: [
      "api caching",
      "form validation",
      "ui creator",
      "content management system",
      "multi project handle",
      "jira task",
    ],
  },
  {
    company: "Buzzfreez Solution",
    role: "frontend developer",
    description: `building a responsive website with multiple language support and i18n for real-time video conferences over web sockets while focusing on layout and responsiveness to deal with the complex layout and we taking client feedback into account at every stage for greater clarity.`,
    date: "May 2021 - Nov 2021",
    tag: [
      "responsive ui",
      "socket.io",
      "web deisign",
      "trello task",
      "zoom client meeting",
    ],
  },
  {
    company: "Government agency",
    role: "frontend developer",
    description: `
    Create a responsive website to promote the local tourism business. and we use the Google api application in several areas.
    `,
    date: "Sep 2020 - Oct 2020",
    tag: ["responsive ui", "material ui", "google map"],
  },
];

export { experience };
