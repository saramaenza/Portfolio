import PropTypes from 'prop-types';

function Button({href, download, className, children}) {
  return (
      <a
          href={href}
          download={download}
          className={className}>
            {children}
      </a>
  )
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  download: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  download: false,
  className: ''
};

export default Button;