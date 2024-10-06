import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomePage = () => {
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
        delay: 0.2,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <section className="container mx-auto">
      <h1
        id="head-text"
        className="text-center text-5xl font-semibold text-yellow-500 pt-24  pb-12 opacity-0 translate-y-10"
      >
        Welcome to <br /> GSAP and Three JS Project
      </h1>
      <p className="w-8/12 mx-auto para">
        The Project is a collection of different pages that are built using
        React, Tailwind CSS, GSAP and Three JS. The project is built to showcase
        the different animations that can be created using GSAP and Three JS.
      </p>
    </section>
  );
};

export default HomePage;
