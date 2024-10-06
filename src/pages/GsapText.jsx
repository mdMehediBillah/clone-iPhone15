import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#head-text", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div className="container mx-auto">
      <h1
        id="head-text"
        className="text-5xl font-bold opacity-0 translate-y-10"
      >
        GsapText
      </h1>
      <p className="text-xl  mt-4 para">
        The gsap.stagger() method is used to create a staggered animation that
        can be used to animate multiple elements with a delay between each
        animation. This can be useful for creating complex animations.
      </p>

      <span className="text-xl  pt-4 para">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div className="flex gap-4 para">
        <div className="w-16 h-20 bg-blue-100 rounded-lg mt-12 blue-box"></div>
      </div>
    </div>
  );
};

export default GsapText;
