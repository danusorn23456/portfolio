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
      "The goal of this project is to investigate real-time applications built with React and Superbase JS. The platform allows users to sign up and log in, after which they can join particular rooms and communicate with other users by exchanging messages. Users will also be able to watch YouTube videos with one another in each room, which will each contain unique information.",
    link: "",
  },
  {
    name: "kit like creative",
    gif: kitlikecreativeGIF,
    description: "",
    paragraph:
      "React JS web application that allows users to select a base color, and the website will generate the remaining color values and display CSS code that they can copy and paste into their own CSS file.",
    link: "",
  },
  {
    name: "online doc",
    gif: onlinedocGIF,
    description: "",
    paragraph:
      "web application for patients seeking medical advice. The primary feature allows patients and doctors to communicate with each other via Real-Time Video Calls and Messaging via WebRTC and Socket.IO.",
    link: "",
  },
  {
    name: "kill switch",
    gif: killswitchGIF,
    description: "",
    paragraph: "help create reponsive page for crypto company",
    link: "",
  },
  {
    name: "infinity store",
    gif: infinitystoredemoGIF,
    description: "",
    paragraph:
      "A web application that can manage stock, list products, and manage multiple accounts is used to list products on the eBay platform. The challenge with this project is figuring out how to connect to the API. It's quite difficult. It requires a lot of time to complete.",
    link: "",
  },
  {
    name: "village-insight",
    gif: villageinsightGIF,
    description: "",
    paragraph:
      "web application that promotes tourism in Thailand by gathering data on local businesses, eateries, and other amenities, some of which require the use of the Google map API.",
    link: "",
  },
  {
    name: "sneaker mock ui",
    gif: sneakershopGIF,
    description: "",
    paragraph:
      "Make a mock sneaker store using HTML and CSS to practice keyframe animation.",
    link: "",
  },
  {
    name: "converse mock ui",
    gif: convertshopGIF,
    description: "",
    paragraph:
      "Make a mock converse store using reactjs with framermotion animation.",
    link: "",
  },
  {
    name: "god slayer",
    gif: godslayerGIF,
    description: "",
    paragraph:
      "A website for a group of friends in guild that is nothing more than just having fun.",
    link: "",
  },
  {
    name: "recoil todo list",
    gif: recoiltodolistGIF,
    description: "",
    paragraph:
      "Make a to do List using Recoil JS combined with data collection in localstorage",
    link: "",
  },
  {
    name: "base64 image upload",
    gif: base64imageuploadGIF,
    description: "",
    paragraph:
      "Create a base64 upload component using the react-dope-zone implementation. This component performs a variety of uploading and editing tasks for images, such as cropping.",
    link: "",
  },
  {
    name: "voxel maker",
    gif: voxelMakerGIF,
    description: "",
    paragraph:
      "3D web application was created to help users learn the fundamentals of 3D web rendering and how to interact with objects by using ray casting techniques.",
    link: "",
  },
  {
    name: "credit card",
    gif: creditCardGIF,
    description: "",
    paragraph:
      "Create Credit Card Animation, which will use the GSAP framework as an animation aid to animate related scrolling of a web page. Credit Card will be animated in accordance with the scrolly progression.",
    link: "",
  },
  {
    name: "image distortion",
    gif: imagedistrotionGIF,
    description: "",
    paragraph: "Create distortion image by using svg filter for fun",
    link: "",
  },
  {
    name: "message loader",
    gif: messageloaderGIF,
    description: "",
    paragraph:
      "Create message component to learning how to handle load previous message data like lazy load",
    link: "",
  },
];
