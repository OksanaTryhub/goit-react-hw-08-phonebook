import PropTypes from 'prop-types';

import { Oval } from 'react-loader-spinner';

const LoadingIndicator = ({ width, height }) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#ffa229"
      secondaryColor="#ffa229"
      strokeWidth={6}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoadingIndicator;

LoadingIndicator.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
