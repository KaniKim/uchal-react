import PropTypes from "prop-types";

ButtonCheck.propTypes = {
  children: PropTypes.string.isRequired,
  acting: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default function ButtonCheck({ children, acting, width }) {
  return <button onClick={() => {acting();}} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${width}`}> {children} </button>;
}