import React from 'react';
import loading from '../assets/loading.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={loading}
        alt="loading..."
        style={{ width: 50, display: 'block' }}
      />
    </div>
  );
};

export default Spinner;
