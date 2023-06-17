import chilltogetherGIF from "../assets/gif/chilltogether.gif";
import kitlikecreativeGIF from "../assets/gif/kitlikecreative.gif";
import villageinsightGIF from "../assets/gif/villageinsight.gif";
import onlinedocGIF from "../assets/gif/onlinedoc.gif";
import infinitystoredemoGIF from "../assets/gif/infinitysore.gif";
import voxelMakerGIF from "../assets/gif/voxelmaker.gif";
import creditCardGIF from "../assets/gif/creditcard.gif";
import killswitchGIF from "../assets/gif/killswitch.gif";
import imagedistrotionGIF from "../assets/gif/imagedistortion.gif";
import messageloaderGIF from "../assets/gif/messageloader.gif";
import sneakershopGIF from "../assets/gif/sneakershop.gif";
import godslayerGIF from "../assets/gif/godslayer.gif";
import base64imageuploadGIF from "../assets/gif/base64-image-upload.gif";
import recoiltodolistGIF from "../assets/gif/recoiltodolist.gif";
import convertshopGIF from "../assets/gif/converseshop.gif";

export type ProjectItem = {
  name: string;
  gif: string;
  description: string;
  paragraph: string;
  link: string;
};

export type ProjectItems = ProjectItem[];

export const projects = [
  {
    name: "chill together",
    gif: chilltogetherGIF,
    description: "",
    paragraph:
      "real time messaging and music player web application with react and supabase for backed",
    link: "",
  },
  {
    name: "kit like creative",
    gif: kitlikecreativeGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "online doc",
    gif: onlinedocGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "kill switch",
    gif: killswitchGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "infinity store",
    gif: infinitystoredemoGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "village-insight",
    gif: villageinsightGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "sneaker mock ui",
    gif: sneakershopGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "converse mock ui",
    gif: convertshopGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "god slayer",
    gif: godslayerGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "recoil todo list",
    gif: recoiltodolistGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "base64 image upload",
    gif: base64imageuploadGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "voxel maker",
    gif: voxelMakerGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "credit card",
    gif: creditCardGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "image disctrotion",
    gif: imagedistrotionGIF,
    description: "",
    paragraph: "",
    link: "",
  },
  {
    name: "message loader",
    gif: messageloaderGIF,
    description: "",
    paragraph: "",
    link: "",
  },
];
