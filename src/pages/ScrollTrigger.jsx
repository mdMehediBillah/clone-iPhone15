import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 250 * (boxes.indexOf(box) + 2),
          rotate: 360,
          borderRadius: "100%",
          scale: 1.5,

          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 10%",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef.current }
  );
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">Gsap ScroolTrigger</h1>
      <p className="text-xl  mt-4">
        The gsap.stagger() method is used to create animation for scroll with
        specific element by class name or id.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rerum
        nobis cum impedit voluptates, corporis beatae quisquam ex quia similique
        commodi eos sit culpa odio numquam enim laborum, ipsam vel?
      </p>

      <span className="text-xl  pt-4">
        https://www.youtube.com/watch?v=kRQbRAJ4-Fs
      </span>

      <div className=" mt-[700px] w-full h-screen ">
        <div ref={scrollRef}>
          <div
            id="scroll-pink"
            className="w-20 h-20 bg-pink-500 rounded-lg mt-12 scroll-box"
          ></div>
          <div
            id="scroll-orange"
            className="w-20 h-20 bg-orange-500 rounded-lg mt-12 scroll-box"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
