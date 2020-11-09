import { Box } from '@material-ui/core';
import React from 'react';

const Row = (props) => {
  return (
    <Box style={{display: 'flex', flexDirection: 'row', ...props.style}}>
      {props.children}
    </Box>
  );
};

export default Row;