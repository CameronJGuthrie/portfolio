import { Box, Typography } from '@material-ui/core';
import React from 'react';

const ProjectView = (props) => {
  return (
    <Box style={{margin: '10px 80px 0 80px'}}>
      <Typography variant='h5'>
        Project: {props.name}
      </Typography>
      <Typography variant='h5'>
        Finished? {props.isDone ? 'Yes!' : 'Not yet'}
      </Typography>
      <Box style={{marginBottom:'30px'}}></Box>
      {props.children}
    </Box>
  );
};

export default ProjectView;