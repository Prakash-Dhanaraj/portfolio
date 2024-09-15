import { AiOutlineLinkedin, AiOutlineBehance, AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
export default function Contact() {
  const config = {
    email: 'prakash.dhanaraj27@gmail',
    phone: '6379517451',
    social :{
      linkedin:'https://www.linkedin.com/in/prakash-dhanaraj',
      behance:'https://www.behance.net/prakashd4',
      instagram:'https://www.instagram.com/designbyprakash',
      whatsapp:'https://wa.me/6379517451',
      github: 'https://github.com/Prakash-Dhanaraj' 
    }
  }
  return (
    <section className=" flex md:flex-row   py-20 contact-all" id="contact">
     <div className="space-y-1">
        <h6 className="font-light text-1xl text-center text-black">
          Get in Touch
        </h6>
        <h2 className="font-bold text-4xl text-center text-white">Contact</h2>
        <p className="font-normal text-1xl text-center text-black    space-y-5 py-5">If you want to discuss more detail,please reacch out to me.</p>
      <p className="py-2"><span className="font-bold ">Email:</span>{config.email}</p>
      <p className="py-2"><span className="font-bold gap-2">Phone:</span>{config.phone}</p>
      <div className='social-media py-20'>
          <h1 className="font-hero-font font-light text-2xl">Follow for more details:</h1>
          <a href={config.social.linkedin} target='_blank' rel="noopener noreferrer"><AiOutlineLinkedin /></a>
          <a href={config.social.github} target='_blank' rel="noopener noreferrer"><AiOutlineGithub /></a>
          <a href={config.social.behance} target='_blank' rel="noopener noreferrer"><AiOutlineBehance /></a>
          <a href={config.social.instagram} target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></a>
          <a href={config.social.whatsapp} target='_blank' rel="noopener noreferrer"><AiOutlineWhatsApp /></a>
        </div>
      </div>
    </section>
  );
}