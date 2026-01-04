import PropTypes from 'prop-types';
import Card from './Card';

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

function Cards({ skills }) {
  return (
    <div className="mt-5 flex flex-wrap justify-center px-5 md:gap-3">
      {skills.map((skill) => (
        <Card key={skill.id} skill={skill} image={images[skill.img]} />
      ))}
    </div>
  );
}

Cards.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object),
};

Cards.defaultProps = {
  skills: [],
};

export default Cards;