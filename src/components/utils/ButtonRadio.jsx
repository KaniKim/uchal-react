import PropTypes from "prop-types";

ButtonRadio.propTypes = {
  children: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
};

export default function ButtonRadio({ children, idName }) {
  return (
    <div className="flex items-center">
      <input type="radio" checked name={idName} id={idName} className="bg-gray-200 hover:bg-gray-300 cursor-pointer 
    w-6 h-6 border-3 border-blue-500 focus:outline-none rounded-lg" />
      <label htmlFor={idName} className="ml-3">{children}</label>
    </div>
  );
}