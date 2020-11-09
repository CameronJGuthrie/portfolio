import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import Row from '../components/Row';
import ProjectCard from '../components/ProjectCard';
import image from '../resources/images/PictureOfMe.png'
import projects from '../resources/Projects';

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  margin: 2px 20px 2px 20px;`;
 
const BoxBanner = styled.div`
  background-color: #333333;
  padding: 8px`;

const PortfolioView = () => {
  const imageSize = 80;
  const pageMargin = {margin: '0 100px 0 100px'}

  return (
    <Box>
      <BoxBanner>
        <Row style={pageMargin}>
          <ProfileImage
            src={image}
            alt='Profile'
            width={imageSize} 
            height={imageSize}/>
          <Typography variant='h2' align='center'>Cameron Guthrie</Typography>
        </Row>
      </BoxBanner>
      <Box style={pageMargin}>
        <Box style={{marginBottom: '20px'}}>
          <Typography variant='h4'>About</Typography>
          <Typography variant='body1'>This is a place where I put my projects.</Typography>
        </Box>
        <Box>
          <Typography variant='h4'>Projects</Typography>
          <Grid container spacing={4}>
            {
              projects.map((p) => { return <Grid item key={p.name}><ProjectCard project={p}/></Grid>})
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioView;