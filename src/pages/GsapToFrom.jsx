import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapToFrom = () => {
  // as useEffect, target selected by id, gsap.to() method
  // animation starts from selected position, moves from 250px to the original position
  useGSAP(() => {
    gsap.fromTo(
      "#green-box",
      {
        x: 0,
        rotate: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotate: 360,
        borderRadius: "100%",
        ease: "bounce.out",
        duration: 2,
      }
    );
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">GsapFromTo</h1>
      <p className="text-xl  mt-4">
        The gsap.fromTo() method is used to animate one or more elements from a
        set of values to another set of values. This can be useful for creating
        simple animations.
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div
        id="green-box"
        className="w-20 h-20 bg-green-300 rounded-lg mt-12"
      ></div>
    </div>
  );
};

export default GsapToFrom;
