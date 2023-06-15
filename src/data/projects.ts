import chilltogetherImageSrc from "../assets/pj-chilltogether.png";
import kitlikecreativeImageSrc from "../assets/pj-kitlikecreative.png";
import villageinsightImageSrc from "../assets/pj-villinsight.png";
import onlinedocImageSrc from "../assets/pj-onlinedoc.png";
import infinitystoredemoImageSrc from "../assets/pj-infinitystoredemo.png";
import tdvoxelImageSrc from "../assets/pj-3d-voxel.png";
import hypescrollImageSrc from "../assets/pj-hypescroll.png";
import cozeblockImageSrc from "../assets/pj-cozeblock.png";
import killswitchImageSrc from "../assets/pj-killswitch.png";

export type ProjectItem = {
  name: string;
  imageSrc: string;
  description: string;
  paragraph: string;
  link: string;
};

export type ProjectItems = ProjectItem[];

export const projects = [
  {
    name: "chill-together",
    imageSrc: chilltogetherImageSrc,
    description: "",
    paragraph:
      "real time messaging and music player web application with react and supabase for backed",
    link: "",
  },
  {
    name: "kit-like-creative",
    imageSrc: kitlikecreativeImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "online-doc",
    imageSrc: onlinedocImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "kill-switch",
    imageSrc: killswitchImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "infinity-store-demo",
    imageSrc: infinitystoredemoImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "village-insight",
    imageSrc: villageinsightImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "3d-voxel",
    imageSrc: tdvoxelImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "hype-scroll",
    imageSrc: hypescrollImageSrc,
    description: "",
    paragraph:
      "The AutoHide Scrollbar project is a custom React component designed to enhance the user experience of scrolling within a web application. Unlike the default scrollbars, this component offers auto-hiding functionality, which means the scrollbar remains hidden until the user hovers over it, providing a cleaner and more immersive interface",
    link: "",
  },
  {
    name: "coze-block",
    imageSrc: cozeblockImageSrc,
    description: "",
    paragraph: "",
    link: "",
  },
];
