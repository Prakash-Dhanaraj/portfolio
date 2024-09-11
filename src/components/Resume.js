import ResumeImg from "../assets/resume.jpg";
export default function Resume() {
  const config = {
    link: 'https://r.search.yahoo.com/_ylt=Awr.wy5MYOBm9I0AIABXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1727190349/RO=10/RU=https%3a%2f%2fpdfdeck.com%2f/RK=2/RS=aleG6OZNWbKGVe__gaOIiKzY9I8-'
  }
  return (
    <section id="resume" className=" flex flex-col md:flex-row  py-20 bg-white text-black about-all">
      <div className=" md:w-1/2 abt-img flex justify-center">
        <img className="w-[400px] " src={ResumeImg} alt="About" />
      </div>
      <div className=" about-ct font-hero-font flex-col  justify-center">
        <h2 className="text-4xl  font-bold mb-5">Resume</h2>
        <h6 className="font-bold">A story of hard work and perseverance.</h6>
        <p>You can view my resume here</p>
        <div className="md:flex-row align-center py-5 space-x-5 Hero-btns">
          <a href={config.link} target='_blank'>
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}
