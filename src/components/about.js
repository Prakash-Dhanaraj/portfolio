import AboutImg from '../assets/about.png';
export default function about() {
  const config = {
    line1: 'A story of hard work and perseverance.',
    line2: 'I am Prakash, a front-end and UI/UX developer with a passion for creating stunning and efficient user interfaces.',
    line3: 'I am Prakash, a front-end and UI/UX developer with a passion for creating stunning and efficient user interfaces.'
  }
    return (
      <section className=" flex flex-col md:flex-row  py-20 bg-white text-black about-all" id='about'>
        <div className=" md:w-1/2 abt-img ">
          <img src= {AboutImg} alt="About"/>
        </div>
        <div className=" about-ct font-hero-font flex-col  justify-center">
          <h6 className="font-light">LET ME INTRODUCE MYSELF</h6>
          <h2 className="text-4xl  font-bold mb-5">About Me</h2>
          <h6 className='font-bold'>{config.line1}</h6>
          <p>{config.line2}</p>
          <h6 className='font-bold'>Contact</h6>
          <p>{config.line3}</p>
          <div className="md:flex-row align-center py-5 space-x-5   about-btns">
          <button><a href='https://wa.me/6379517451' target='_blank' rel="noopener noreferrer"> Hire me</a></button>
          <button >Download CV</button>
        </div>
        </div>      
      </section>
    );
  }
  