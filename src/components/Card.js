import PropTypes from 'prop-types';

function Card({ skill, image }) {
  return (
    <div className="flex m-4 p-3 w-35 h-35 bg-white rounded-lg border border-neutral-300 shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl flex-col items-center justify-center">
      <img
        src={image}
        alt={skill.name}
        className="w-14 h-14 mb-2 mx-auto"
      />
      <span className="pt-2 text-center text-md font-medium text-neutral-600 font-quicksand">{skill.name}</span>
    </div>
  );
}

Card.propTypes = {
  skill: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
};

Card.defaultProps = {
  skill: {},
  image: '',
};

export default Card;