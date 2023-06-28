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
  paragraph: string;
  repo: "@missing" | "@notavailable" | "@private" | string;
  site: "@missing" | "@notavailable" | "@private" | string;
};

export type ProjectItems = ProjectItem[];

export const projects: ProjectItems = [
  {
    name: "chill together",
    gif: chilltogetherGIF,
    paragraph:
      "The goal of this project is to investigate real-time applications built with React and Superbase JS. The platform allows users to sign up and log in, after which they can join particular rooms and communicate with other users by exchanging messages. Users will also be able to watch YouTube videos with one another in each room, which will each contain unique information.",
    repo: "https://github.com/danusorn23456/chill-together",
    site: "https://chill-together.vercel.app/",
  },
  {
    name: "kit like creative",
    gif: kitlikecreativeGIF,
    paragraph:
      "React JS web application that allows users to select a base color, and the website will generate the remaining color values and display CSS code that they can copy and paste into their own CSS file.",
    repo: "https://github.com/danusorn23456/kit-like-creative",
    site: "https://kit-like-creative.vercel.app/css-generator",
  },
  {
    name: "online doc",
    gif: onlinedocGIF,
    paragraph:
      "web application for patients seeking medical advice. The primary feature allows patients and doctors to communicate with each other via Real-Time Video Calls and Messaging via WebRTC and Socket.IO.",
    repo: "@private",
    site: "",
  },
  {
    name: "kill switch",
    gif: killswitchGIF,
    paragraph: "help create reponsive page for crypto company",
    repo: "@private",
    site: "",
  },
  {
    name: "infinity store",
    gif: infinitystoredemoGIF,
    paragraph:
      "A web application that can manage stock, list products, and manage multiple accounts is used to list products on the eBay platform. The challenge with this project is figuring out how to connect to the Ebay API. It's quite difficult. It requires a lot of time to complete.",
    repo: "@private",
    site: "",
  },
  {
    name: "village-insight",
    gif: villageinsightGIF,
    paragraph:
      "web application that promotes tourism in Thailand by gathering data on local businesses, eateries, and other amenities, some of which require the use of the Google map API.",
    repo: "@private",
    site: "https://www.villageinsight.org/Landing",
  },
  {
    name: "sneaker mock ui",
    gif: sneakershopGIF,
    paragraph:
      "Make a mock sneaker store using HTML and CSS to practice keyframe animation.",
    repo: "",
    site: "",
  },
  {
    name: "converse mock ui",
    gif: convertshopGIF,
    paragraph:
      "Make a mock converse store using reactjs with framermotion animation.",
    repo: "",
    site: "",
  },
  {
    name: "god slayer",
    gif: godslayerGIF,
    paragraph:
      "A website for a group of friends in guild that is nothing more than just having fun.",
    repo: "https://github.com/danusorn23456/rotmg-god-slayer-web-app",
    site: "https://rotmg-god-slayer-web-app.vercel.app",
  },
  {
    name: "recoil todo list",
    gif: recoiltodolistGIF,
    paragraph:
      "Make a to do List using Recoil JS combined with data collection in localstorage",
    repo: "https://github.com/danusorn23456/react-recoil-todo-list",
    site: "https://react-recoil-todo-list.vercel.app",
  },
  {
    name: "base64 image upload",
    gif: base64imageuploadGIF,
    paragraph:
      "Create a base64 upload component using the react-dope-zone implementation. This component performs a variety of uploading and editing tasks for images, such as cropping.",
    repo: "https://github.com/danusorn23456/react-base64-image-upload",
    site: "https://react-base64-image-upload.vercel.app/",
  },
  {
    name: "voxel maker",
    gif: voxelMakerGIF,
    paragraph:
      "3D web application was created to help users learn the fundamentals of 3D web rendering and how to interact with objects by using ray casting techniques.",
    repo: "https://github.com/danusorn23456/react-three-fiber-voxel-maker-example",
    site: "https://react-three-fiber-voxel-maker-example.vercel.app/",
  },
  {
    name: "credit card",
    gif: creditCardGIF,
    paragraph:
      "Create Credit Card Animation, which will use the GSAP framework as an animation aid to animate related scrolling of a web page. Credit Card will be animated in accordance with the scrolly progression.",
    repo: "@missing",
    site: "",
  },
  {
    name: "image distortion",
    gif: imagedistrotionGIF,
    paragraph: "Create distortion image by using svg filter for fun",
    repo: "https://github.com/danusorn23456/distortion-paper",
    site: "https://distortion-paper.vercel.app/",
  },
  {
    name: "pagination message loader",
    gif: messageloaderGIF,
    paragraph:
      "Create message component to learning how to handle load previous message data like lazy load",
    repo: "https://github.com/danusorn23456/pagination-message-loader",
    site: "https://pagination-message-loader.vercel.app/",
  },
];
