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
        className="mt-10 h-screen pt-15 relative isolate overflow-hidden w-full flex items-center justify-center"
    >
      <div className="relative pb-24 sm:pb-32 text-center">
          <Title title="Skills"></Title>
          <Paragraph>
              Things i'm familiar with:
          </Paragraph>
          <Cards skills={skills_data}></Cards>
      </div>
    </section>
  )
}

export default Skills;