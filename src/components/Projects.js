import EcommerceImg from "../assets/ecommerce-websites.jpg";
import GymEcommerceIMG from "../assets/GymWeb.jpg";
import FoodEcommerceImg from "../assets/food-ecommerce.jpg";

export default function Projects() {
  const config = {
    Projects: [
      {
        image: EcommerceImg,
        description: 'E-commerce website design made by Figma.',
        link: ''
      },
      {
        image: GymEcommerceIMG,
        description: 'Strongman website design made by Figma.',
        link: ''
      },
      {
        image: FoodEcommerceImg,
        description: 'Food ecommerce and more projects to explore',
        link: 'https://prakash123.neocities.org/calculator/'
      }
    ]
  };

  return (
    <section id="projects" className="projects space-y-2 md:flex-row px-20 py-20">
      <div className="space-y-1">
        <h6 className="font-light text-1xl text-center">
          WHAT I WILL DO FOR YOU
        </h6>
        <h2 className="project-hd">My Projects</h2>
        <p className="font-normal text-1xl text-center py-5">
          These are some of my best projects. I have built these with HTML, CSS, React, Tailwind CSS, and JavaScript. Check them out
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-center pt-10 gap-10">
          {config.Projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank">
            <div key={index} className="relative">
              <img src={project.image} className="h-[200px] w-[300px]" alt={`Project ${index + 1}`} />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
              </div>
              {/* <a className="about-btns text" href={project.link} target="_blank" >view project</a> */}
            </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
