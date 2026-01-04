import PropTypes from 'prop-types';

function Paragraph({children}) {
  return (
    <p className="font-quicksand font-medium mt-5 px-20 text-xl leading-7 text-neutral-600">
        {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;