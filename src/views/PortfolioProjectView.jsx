import { Typography } from '@material-ui/core';
import React from 'react';

import ProjectView from './ProjectView';

const PortfolioProjectView = () => {
  return (
    <ProjectView name='Portfolio Project' isDone={false}>
      <Typography>
        Setup of the portfolio page went something like this.
        I created a new empty repository on the github website. I then cloned it to my local drive with some simple enough commands from the setup guide. I used the command line again to perform an initial commit with a README.md file, and finally when all was done I opened Github Desktop to check if everything looked good. It looked about as I expected.
        For some context, I have mostly used the GUI application Github Desktop to do most things with git in the past, and I’d like to become more familiar with using the command line going forwards.
        Now, I ran the command to create a react app, npx create-react-app portfolio and tested that it worked by running npm run start. The default react app screen popped up in my browser and I was ready to start adding modules and writing some code.
        Before that though, I’m going to plan out what the page should look like on some bits of paper.
        After some rough planning, my first coding activity was to set up a place for my name and a photo to go. I followed my sketch and ended up with a banner with an image to the left
      </Typography>
    </ProjectView>
  );
};

export default PortfolioProjectView;