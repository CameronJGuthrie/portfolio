import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

import ProjectContainer from '../components/ProjectContainer';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';

import cardDesign from '../resources/images/card-design.jpg';
import profileDesign from '../resources/images/profile-design.jpg';
import createReactApp from '../resources/images/create-react-app.png';
import portfolioProject from '../resources/images/portfolioProject.png';
import npmModules from '../resources/images/npm-modules.png';
import gitPush from '../resources/images/git-push.png';

const useStyles = makeStyles(theme => ({
  centerImage: {display:'block', marginLeft: 'auto', marginRight:'auto', maxWidth: '99%', maxHeight:'650px'}
}));

const PortfolioProjectView = () => {

  const classes = useStyles();


  return (
    <ProjectContainer name='Portfolio Project' isDone={false}>
      <Paragraph date='8:30 AM - 10/10/2020'>
        Setup of the portfolio page went something like this.
      </Paragraph>
      <Paragraph>
        I created a new empty repository on the github website. I then cloned it to my local drive with some simple enough commands from the setup guide. I used the command line again to perform an initial commit with a README.md file, and finally when all was done I opened Github Desktop to check if everything looked good. It looked about as I expected.
      </Paragraph>
      <Paragraph> 
        For some context, I have mostly used the GUI application Github Desktop to do most things with git in the past, and I’d like to become more familiar with using the command line going forwards.
      </Paragraph>
      <Paragraph>
        Now, I ran the command to create a react app, npx create-react-app portfolio and tested that it worked by running npm run start. The default react app screen popped up in my browser and I was ready to start adding modules and writing some code.
      </Paragraph>
      <Image>        
        <img className={classes.centerImage} src={createReactApp} alt='Create React App'/>
        <Box style={{height:'10px'}}></Box>
        <img className={classes.centerImage} src={npmModules} alt='npm Modules'/>
      </Image>
      <Paragraph date='9:00 AM'>
        Before I go any further though, I’m going to plan out what the page should look like on some bits of paper.
      </Paragraph>
      <Image>
        <img className={classes.centerImage} src={profileDesign} alt='Profile Design'/>
      </Image>
      <Image>
        <img className={classes.centerImage} src={cardDesign} alt='Card Design'/> 
      </Image>
      <Paragraph>
        After some rough planning, my first coding activity was to set up a place for my name and a photo to go. I followed my sketch and ended up with a banner with an image to the left
      </Paragraph>
      <Paragraph date='12:00 PM'>
        I moved on to the card, one for each project. I changed my mind with the name being the link, and for now I made the picture the link. When clicked, you are redirected to a page containing the process.
      </Paragraph>
      <Image>
        <img className={classes.centerImage} src={portfolioProject} alt='Portfolio Project'/> 
      </Image>
      <Paragraph>
      I spent some time styling, but I know I will be changing it later so I’m not too fussed about getting things perfect right now.
      </Paragraph>
      <Paragraph date='2:30 PM'>
        After some more tinkering, I pushed all my changes and surprisingly, nothing went wrong. Now I am free to add my projects and document my experiences on a personal portfolio page.
      </Paragraph>
      <Image>
        <img src={gitPush} alt ='Git Push' className={classes.centerImage}/>
      </Image>
    </ProjectContainer>
  );
};

export default PortfolioProjectView;