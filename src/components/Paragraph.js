import PropTypes from 'prop-types';

function Paragraph({children}) {
  return (
    <p className="font-quicksand font-medium text-base sm:text-lg md:text-xl 2xl:text-2xl leading-7 2xl:leading-9 text-neutral-600">
        {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;