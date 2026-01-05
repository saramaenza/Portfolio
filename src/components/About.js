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
      title: 'Download my CV',
      download: true,
      className: "p-2 rounded-lg flex items-center border border-neutral-600 justify-center transition-all duration-500 text-neutral-700 hover:bg-carnation hover:text-white",
  }
    
  return (
    <section
      data-aos="fade-left"
      data-aos-delay="300"
      id="about"
      className="2xl:mt-0 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-10 sm:pt-16 2xl:pt-0 relative isolate overflow-hidden w-full flex items-center justify-center"
    >
      <div className="w-full px-5 xl:px-20 xs:bg-green-300">
        <div className="w-full flex justify-center">
          <Title title="About Me" />
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-8 lg:gap-10">
          <div className="md:basis-1/5 w-full flex flex-col items-center pt-10">
            <ContactCard
              photo={foto_Sara}
              city={contact.city}
              email={contact.email}
              phone={contact.phone}
            />
            <Button {...aButtonCV}>
              <span className="text-sm md:text-md 2xl:text-lg font-bold font-quicksand tracking-wide">Download my CV</span>
            </Button>
          </div>
          <div className="w-full md:w-2/3 2xl:pl-2 md:pl-8 pt-5 sm:pt-5 md:pt-0">
            <Paragraph>
              I&apos;m a front-end developer passionate about technology and programming, focused on building intuitive, 
              user-centered web experiences. I care deeply about interface design, usability, and human-computer 
              interaction, and I enjoy transforming ideas into clean, accessible, and responsive interfaces. 
              My work combines solid technical skills with attention to detail, reliability, and a results-oriented mindset. 
              I&apos;m always eager to learn, experiment, and grow in dynamic environments where I can contribute real value 
              through thoughtful front-end development.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About