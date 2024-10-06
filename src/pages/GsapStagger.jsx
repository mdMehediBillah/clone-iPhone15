import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".blue-box", {
      y: 200,
      rotation: 360,
      borderRadius: "50%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">GsapStagger</h1>
      <p className="text-xl  mt-4">
        The gsap.stagger() method is used to create a staggered animation that
        can be used to animate multiple elements with a delay between each
        animation. This can be useful for creating complex animations.
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div className="flex gap-4">
        <div className="w-16 h-20 bg-blue-100 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-200 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-300 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-400 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-500 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-600 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-700 rounded-lg mt-12 blue-box"></div>
        <div className="w-16 h-20 bg-blue-800 rounded-lg mt-12 blue-box"></div>
      </div>
    </div>
  );
};

export default GsapStagger;
