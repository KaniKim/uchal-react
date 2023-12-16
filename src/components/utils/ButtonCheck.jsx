import PropTypes from 'prop-types';

ButtonCheck.propTypes = {
    children: PropTypes.string.isRequired,
};

export default function ButtonCheck({ children, acting }) {
    return <button onClick={acting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {children} </button>
}