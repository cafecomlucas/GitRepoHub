import React from 'react';

export default ({ match }) => {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
};
