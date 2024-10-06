import { Link } from "react-router-dom";
import { gsapAnimationsGuide } from "../constrains/index";

const GsapMainPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2>GSAP Animations Guide</h2>
        {/* Apply grid to the entire list */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {gsapAnimationsGuide.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col p-2 bg-gray-700 rounded-lg">
                <h3 className="text-blue-500 font-semibold">{item.title}</h3>
                <p>{item.description}</p>
                <Link to={`/${item.id}`}>
                  <p className="py-1 px-4 border-2 rounded-lg cursor-pointer text-center mt-2">
                    Learn More
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GsapMainPage;
