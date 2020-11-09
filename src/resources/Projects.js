import portfolioPreview from './images/portfolioProject.png'

class Project {
  constructor(name, date, previewImage, isDone) {
    this.name = name;
    this.date = date;
    this.preview = previewImage;
    this.isDone = isDone;
  }
}

const projects = [
  new Project('Portfolio', '11/09/2020', portfolioPreview, false)
];

export default projects;