import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Crypto = ({ crypto }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cryptocard"
      onClick={() => navigate(`/details/${crypto.id}`)}
      aria-hidden="true"
    >
      <h2 className="cryptoname">{crypto.name}</h2>
      <img
        onFocus={(e) => {
          e.preventDefault();
        }}
        onBlur={(e) => {
          e.preventDefault();
        }}
        className="cryptoimg"
        src={crypto.icon}
        alt={crypto.id}
      />
    </div>
  );
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Crypto;
