import PropTypes from 'prop-types';

ButtonCheck.propTypes = {
    children: PropTypes.string.isRequired,
};

export default function ButtonCheck({ children }) {
    return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> {children} </button>
}