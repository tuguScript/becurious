import React from 'react';
import { Router } from 'react-router';
import { routes } from './routes';
import PropTypes from 'prop-types';

function Root({history, store}) {
  return (
      <Router
        history={history}
        routes={routes}
      />
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Root;