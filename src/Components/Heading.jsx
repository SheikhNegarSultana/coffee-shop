import PropTypes from 'prop-types';

const Heading = ( { title , subtitle}) => {
    return (
        <div>
             <h1 className="text-5xl font-bold text-center mt-10">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};
Heading.propTypes = {
    title: PropTypes.string.isRequired,  // title is required and should be a string
    subtitle: PropTypes.string           // subtitle is optional but should be a string if provided
};

export default Heading;