import { Box } from '@material-ui/core';
import React from 'react';

const Col = (props) => {
  return (
    <Box style={{display: 'flex', flexDirection: 'column', ...props.style}}>
      {props.children}
    </Box>
  );
};

export default Col;