import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  // as useEffect, target selected by id, gsap.to() method
  // animation starts from selected position, moves from 250px to the original position
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      ease: "power1.inOut",
      // ease: "elastic.inOut(1, 0.8)",
      // ease: "bounce.in bounce.out",
      duration: 2,
    });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">GsapFrom</h1>
      <p className="text-xl  mt-4">
        The gsap.from() method is used to animate one or more elements from a
        set of values to their current values. This can be useful for creating
        simple animations.
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div
        id="green-box"
        className="w-20 h-20 bg-green-500 rounded-lg mt-12"
      ></div>
    </div>
  );
};

export default GsapFrom;
