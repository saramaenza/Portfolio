import React from 'react'
import Title from './Title'
import { data_projects } from '../data/projects'
import Button from './Button';
import PropTypes from 'prop-types';

function ProjectTechnologies({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2 justify-start md:justify-end mt-2">
      {technologies.map((tech) => (
        <span key={tech} className="px-3 py-1 rounded bg-neutral-100 text-neutral-700 text-xs 2xl:text-base">{tech}</span>
      ))}
    </div>
  );
}

function ProjectActions({ github, demo }) {
  return (
    <div className="flex items-center justify-start md:justify-end gap-3 flex-wrap mt-4">
      <Button
        href={github}
        download={false}
        title="GitHub Repository"
        className="group p-1.5 rounded-lg flex items-center border border-neutral-600 justify-center transition-colors duration-300 hover:bg-carnation"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 2xl:w-8 2xl:h-8" 
          viewBox="0 0 24 24" 
          fill="currentColor">
            <path 
              d="M12 .296a12 12 0 00-3.792 23.403c.6.111.82-.261.82-.58 0-.287-.01-1.048-.016-2.058-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.088-.744.083-.729.083-.729 1.204.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.303 3.492.997.108-.776.419-1.303.762-1.602-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.237-3.221-.124-.304-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 016.006 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.65.243 2.872.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.624-5.476 5.92.431.372.816 1.102.816 2.222 0 1.604-.014 2.897-.014 3.29 0 .321.216.695.826.577A12 12 0 0012 .296z"
              className="fill-neutral-700 transition-colors duration-300 group-hover:fill-white"
            />
        </svg>
      </Button>
      <Button
        href={demo}
        download={false}
        title="Live Demo"
        className="group p-1.5 rounded-lg flex items-center border border-neutral-600 justify-center transition-colors duration-300 hover:bg-carnation"
      >
        <span
          className="material-symbols-rounded transition-colors duration-300 group-hover:text-white"
          style={{ fontSize: window.innerWidth >= 1536 ? '30px' : '24px' }}
        >
          open_in_new
        </span>
      </Button>
    </div>
  );
}

function ProjectCard({ project, idx }) {
  if (!project) return null;

  return (
    <div
      data-aos={idx % 2 === 1 ? "fade-right" : "fade-left"}
      data-aos-delay="300"
      className={`flex flex-col md:flex-row items-center md:items-center gap-7 mt-5 ${
        idx % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-col items-center w-full md:w-5/9 h-full justify-center border border-neutral-300 rounded-lg overflow-hidden shadow-lg">
        <video
          className="rounded-lg w-full"
          src={project.video ? "/video/" + project.video : undefined}
          loop
          autoPlay
          muted
          playsInline
        >
          Il tuo browser non supporta il video.
        </video>
      </div>
      <div className="flex-1 text-left md:text-right font-quicksand w-full md:w-4/9 mt-5 md:mt-0">
        <h3 className="text-2xl 2xl:text-3xl font-bold mb-2 text-neutral-700 mt-0 md:mt-5">{project.name}</h3>
        <p
          className="mb-4 font-medium text-neutral-600 text-md 2xl:text-lg mt-5"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectActions github={project.github} demo={project.demo} />
      </div>
    </div>
  );
}
function Projects() {
  return (
    <section
      id="projects"
      className="pt-15 mt-20 sm:mt-16 xl:mt-35 2xl:mt-60 relative isolate overflow-hidden w-full flex items-center justify-center"    >
      <div className="w-full">
        <div className="w-full flex justify-center" data-aos="fade-left" data-aos-delay="300">
          <Title title="My Projects" />
        </div>
        <div className="relative w-full px-4 sm:px-8 md:px-20 mt-10 2xl:mt-20">
          {data_projects.map((project, idx) => (
            <>
                <ProjectCard project={project} idx={idx} />
                {idx !== data_projects.length - 1 && (
                <hr data-aos="fade-up" className="w-32 sm:w-48 h-1 my-20 mx-auto bg-carnation border-0 rounded-sm" />
                )}
            </>
            ))}
        </div>
      </div>
    </section>
  );
}

ProjectTechnologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ProjectActions.propTypes = {
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    video: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }),
  idx: PropTypes.number.isRequired,
};

export default Projects;