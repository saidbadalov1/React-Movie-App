import propTypes from 'prop-types';

const Button = (props) => {
  const { classNames, children } = props;
  return (
    <button
      className={` ${classNames} bg-rose-700 rounded-lg px-4 py-2 hover:bg-opacity-90 transition-colors`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  classNames: propTypes.string,
  children: propTypes.oneOfType([propTypes.array, propTypes.string]),
};

export default Button;
