import {  Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Center from './Center';

import Col from './Col';
import Row from './Row';

const PreviewImage = styled.img`
  margin: 2 2 2 2;
  border-radius: 12%;
  `

const ProjectCard = (props) => {
  const cardWidth = 200;
  const cardHeight = 240;

  const doneColor = '#a3bfd1'
  const inProgressColor = '#d1bba3'

  return (
    <Paper 
      style={{
        width: `${cardWidth}px`, 
        height: `${cardHeight}px`,
        backgroundColor: (props.project.isDone ? doneColor : inProgressColor)
      }} 
      elevation={2}>
      <Col style={{width: '100%', height: '100%'}}>
        <Center style={{width:'100%', minHeight: '80%'}}>
          <Link to='portfolioProject'>
          <PreviewImage 
            style={{
              maxWidth: `${cardWidth * 0.95}px`,
              maxHeight: `${cardHeight * 0.8}px`,
              marginTop: '5px',
            }}
            src={props.project.preview} 
            alt='project preview'/>
          </Link>
        </Center>
        <Row style={{width:'90%', minHeight: '15%', margin: '0 auto 0 auto'}}>
          <Typography variant='body1' style={{margin: 'auto auto 0 0', color: 'black'}}>{props.project.name}</Typography>
          <Typography variant='body1' style={{margin: 'auto 0 0 auto', color: 'black'}}>{props.project.date}</Typography>
        </Row>
      </Col>
    </Paper>
  );
}

export default ProjectCard;