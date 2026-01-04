import PropTypes from 'prop-types';

function Paragraph({children}) {
  return (
    <p className="font-quicksand font-medium mt-7 text-base sm:text-lg md:text-xl leading-7 text-neutral-600">
        {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;