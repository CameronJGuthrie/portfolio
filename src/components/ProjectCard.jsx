import {  Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Center from './Center';

import Col from './Col';
import Row from './Row';

const PreviewImage = styled.img`
  margin: 2 2 2 2;
  border-radius: 6%;
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
        <Center style={{width:'100%', minHeight: '84%'}}>
          <Link to={props.project.link}>
          <PreviewImage 
            style={{
              maxWidth: `90%`,
              maxHeight: `${200}px`,
              marginTop: '5px',
            }}
            src={props.project.preview} 
            alt='project preview'/>
          </Link>
        </Center>
        <Row style={{padding: '2px', width:'90%', minHeight: '10%', margin: '0 auto 0 auto', backgroundColor:'white', borderRadius:'3px'}}>
          <Typography variant='body1' style={{margin: '0 auto 0 0', color: 'black'}}><b>{props.project.name}</b></Typography>
          <Typography variant='body2' style={{margin: '0 0 0 auto', color: 'black'}}>{props.project.date}</Typography>
        </Row>
      </Col>
    </Paper>
  );
}

export default ProjectCard;