import PropTypes from 'prop-types';

function Title ({ title, children}) {
    let content = '';
    let textColor = '';
    if (title) {
        content = title;
        textColor = 'text-carnation';
    } else {
        content = children;
        textColor = 'text-neutral-700';
    }
  return (
    <h1 className={`tracking-wide font-bowlby text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl ${textColor}`}>
      {content}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Title;