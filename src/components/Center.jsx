import { Box } from '@material-ui/core';
import React from 'react';

const Center = (props) => {
  return (
    <Box style={{textAlign: 'center', ...props.style}}>
      {props.children}
    </Box>
  )
};

export default Center;