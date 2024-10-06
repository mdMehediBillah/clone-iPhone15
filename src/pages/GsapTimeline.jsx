import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 250,
      rotate: 360,
      scale: 0.5,
      borderRadius: "100%",
      duration: 1,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      x: 500,
      scale: 2,
      rotate: 360,
      borderRadius: "15%",
      duration: 1,
      ease: "back.inOut",
    });
    timeline.to("#yellow-box", {
      y: 0,
      scale: 1,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  const playButton = () => {
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">GsapTimeline</h1>
      <p className="text-xl  mt-4">
        The gsap.Timeline() method is used to create a timeline that can be used
        to sequence multiple animations. This can be useful for creating complex
        animations.
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div className="mt-16">
        <button
          className=" py-2 px-4 bg-cyan-800 rounded-lg"
          onClick={playButton}
        >
          Play/Pause
        </button>
      </div>

      <div
        id="yellow-box"
        className="w-20 h-20 bg-yellow-500 rounded-lg mt-12"
      ></div>
    </div>
  );
};

export default GsapTimeline;
