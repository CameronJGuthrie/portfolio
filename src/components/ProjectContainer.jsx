import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectContainer = (props) => {
  return (
    <Box>
      <Link to='/' style={{margin:'20px'}}>Return Home</Link>
      <Box style={{minWidth: '400px', maxWidth: '800px', margin: '10px 150px 0 150px', paddingBottom: '50vh'}}>
        <Typography variant='h5'>
          Project: {props.name}
        </Typography>
        <Typography variant='h5'>
          Finished? {props.isDone ? 'Yes!' : 'Not yet'}
        </Typography>
        <Box style={{marginBottom:'30px'}}></Box>
        {props.children}
      </Box>
    </Box>
  );
};

export default ProjectContainer;