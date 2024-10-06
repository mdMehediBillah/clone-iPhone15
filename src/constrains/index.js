export const gsapAnimationsGuide = [
  {
    id: "gsapTo",
    title: "GSAP To",
    description:
      "The gsap.to() method is the most common way to animate with GSAP. It allows you to animate any property of any object (or array of objects) over time. You can also define the duration, ease, and other properties of the animation.",
    link: "",
  },
  {
    id: "gsapFrom",
    title: "GSAP From",
    description:
      "The gsap.from() method is similar to gsap.to(), but it animates the target object from the specified values to its current values. This can be useful for creating entrance animations.",
    link: "",
  },
  {
    id: "gsapFromTo",
    title: "GSAP FromTo",
    description:
      "The gsap.fromTo() method allows you to animate an object from one set of values to another. This can be useful for creating more complex animations.",
    link: "",
  },
  {
    id: "gsapTimeline",
    title: "GSAP Timeline",
    description:
      "The gsap.timeline() method allows you to create a timeline of animations. This can be useful for sequencing animations or creating more complex animations.",
    link: "",
  },
  {
    id: "gsapStagger",
    title: "GSAP Stagger",
    description:
      "The gsap.stagger() method allows you to stagger animations. This can be useful for creating more dynamic animations.",
    link: "",
  },

  {
    id: "scrollTrigger",
    title: "GSAP ScrollTrigger",
    description:
      "The GSAP ScrollTrigger plugin allows you to trigger animations based on scroll events. This can be useful for creating scroll-based animations.",
    link: "",
  },
  {
    id: "gsapText",
    title: "GSAP Text Plugin",
    description:
      "The GSAP Text plugin allows you to animate text in more complex ways. This can be useful for creating more dynamic text animations.",
    link: "",
  },
];

import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
