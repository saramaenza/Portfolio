import Title from './Title'
import Paragraph from './Paragraph'
import Cards from './Cards'
import { skills_data } from '../data/skills_data'

function Skills() {
  return (
    <section
        data-aos="fade-right"
        data-aos-delay="300"
        id="skills"
        className="mt-10 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-10 sm:pt-16 2xl:pt-0 relative isolate overflow-hidden w-full flex items-center justify-center"
    >
      <div className="relative pb-16 sm:pb-24 md:pb-32 2xl:pb-0 text-center w-full max-w-7xl mx-auto px-4">
          <Title title="Skills"></Title>
          <div className="mt-4 2xl:my-10">
            <Paragraph>
              Things I'm familiar with:
            </Paragraph>
          </div>
          <Cards skills={skills_data}></Cards>
      </div>
    </section>
  )
}

export default Skills;