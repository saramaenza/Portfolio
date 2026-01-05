import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

const HeroTitle = () => (
  <>
    <h3 className="tracking-wide font-bowlby text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-neutral-700 pb-3 sm:pb-5">
      Hello!
    </h3>
    <Title>
      I&apos;m <span className="text-carnation">Sara Maenza</span>, <br />
      a <span className="text-carnation">Front-End Developer</span>.
    </Title>
  </>
);

const HeroDescription = () => (
  <Paragraph className="max-w-xs sm:max-w-md md:max-w-lg mx-auto text-base sm:text-lg md:text-xl px-4 sm:px-10 md:px-20">
    I'm passionate about building projects that solve real problems and constantly improving my skills. I enjoy experimenting with new technologies and turning ideas into functional applications. Scroll down to discover more about my work and skills.
  </Paragraph>
);

const SocialButton = ({ href, ariaLabel, children }) => (
  <Button
    href={href}
    title={ariaLabel}
    download={false}
    className="group p-2 rounded-lg flex items-center border border-neutral-600 justify-center transition-colors duration-300 hover:bg-carnation"
    aria-label={ariaLabel}
  >
    {children}
  </Button>
);

const HeroButtons = () => (
  <div className="w-full h-auto py-4 sm:py-6 flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
    <SocialButton href="https://www.linkedin.com/in/sara-maenza" ariaLabel="LinkedIn profile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        aria-label="LinkedIn icon"
        role="img"
        className="w-7 h-7 2xl:w-10 2xl:h-10" 
      >
        <path
          d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
          className="fill-neutral-700 transition-colors duration-300 group-hover:fill-white"
        />
      </svg>
    </SocialButton>
    <SocialButton href="https://github.com/saramaenza" ariaLabel="GitHub profile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 2xl:w-10 2xl:h-10" 
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-label="GitHub icon"
        role="img"
      >
        <path
          d="M12 .296a12 12 0 00-3.792 23.403c.6.111.82-.261.82-.58 0-.287-.01-1.048-.016-2.058-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.088-.744.083-.729.083-.729 1.204.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.776.419-1.303.762-1.602-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.237-3.221-.124-.304-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.65.243 2.872.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.624-5.476 5.92.431.372.816 1.102.816 2.222 0 1.604-.014 2.897-.014 3.29 0 .321.216.695.826.577A12 12 0 0012 .296z"
          className="fill-neutral-700 transition-colors duration-300 group-hover:fill-white"
        />
      </svg>
    </SocialButton>
  </div>
);

function Hero() {
  return (
    <header
      data-aos="fade-up"
      id="hero"
      className="relative mt-5 isolate overflow-hidden w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen flex items-center justify-center"
      role="banner"
      aria-label="Hero section"
    >
      <div className="relative pt-20 sm:pt-15 w-full flex flex-col items-center justify-center">
        <div className="text-center px-5 md:px-20">
          <HeroTitle />
          <div className="mt-4">
            <HeroDescription />
          </div>
        </div>
        <HeroButtons />
      </div>
    </header>
  );
}

export default Hero;