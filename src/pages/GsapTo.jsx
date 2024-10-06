import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // as useEffect, target selected by id, gsap.to() method
  // animation starts from original position, moves 250px to the right
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      ease: "elastic.inOut(1, 0.8)",
      // ease: "bounce.in bounce.out",
      duration: 2,
    });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">GsapTo</h1>
      <p className="text-xl  mt-4">
        The gsap.to() method is used to animate one or more elements to a set of
        values. This can be useful for creating simple animations.
      </p>
      <p className="text-xl  mt-4">
        The gsap.to() method accepts three arguments: the target element(s), the
        duration of the animation, and the properties to animate.
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div
        id="blue-box"
        className="w-20 h-20 bg-blue-500 rounded-lg mt-12"
      ></div>
    </div>
  );
};

export default GsapTo;
