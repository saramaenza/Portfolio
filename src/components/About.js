import Title from './Title'
import Paragraph from './Paragraph'
import Button from './Button';
import ContactCard from './ContactCard';
import foto_Sara from '../fotoCV.jpg';
import cvPdf from '../Sara-Maenza-CV.pdf';

function About() {

  const contact = {
    city: 'Pisa, Italy',
    email: 'sara.maenza98@gmail.com',
    phone: '+39 340 2113342',
  };

  const aButtonCV = {
      href: cvPdf,
      download: true,
      className: "p-2 rounded-lg flex items-center border border-neutral-600 justify-center transition-all duration-500 text-neutral-700 hover:bg-carnation hover:text-white",
  }
    
  return (
    <section
      data-aos="fade-left"
      data-aos-delay="300"
      id="about"
      className="mt-10 h-screen pt-15 px-25 relative isolate overflow-hidden w-full flex flex-col"
    >
      <div className="w-full">
        <div className="w-full flex justify-center">
          <Title title="About Me" />
        </div>
        <div className="relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left mt-8">
          <div className="md:basis-1/5 pl-20 w-full flex flex-col items-center pt-10">
            <ContactCard
              photo={foto_Sara}
              city={contact.city}
              email={contact.email}
              phone={contact.phone}
            />
            <Button {...aButtonCV}>
              <span className="text-md font-bold font-quicksand tracking-wide">Download my CV</span>
            </Button>
          </div>
          <div className="md:basis-4/5 w-full">
            <Paragraph>
              I&apos;m a front-end developer passionate about technology and programming, focused on building intuitive, 
              user-centered web experiences. I care deeply about interface design, usability, and human-computer 
              interaction, and I enjoy transforming ideas into clean, accessible, and responsive interfaces. 
              I combine solid technical skills with attention to detail, reliability, and a results-oriented mindset. 
              I&apos;m always eager to learn, experiment, and grow in dynamic environments where I can contribute real value 
              through thoughtful front-end development.
            </Paragraph>
          </div>
          
        </div>
      </div>
      <div className="w-full h-auto py-8 mt-10 flex items-center justify-center gap-5 pb-24 sm:pb-32">
        
      </div>
    </section>
  )
}

export default About