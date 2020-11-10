import portfolioPreview from './images/portfolioProject.png'
import pythonLogo from './images/python.png'

class Project {
  constructor(name, date, previewImage, isDone, link) {
    this.name = name;
    this.date = date;
    this.preview = previewImage;
    this.isDone = isDone;
    this.link = link;
  }
}

const projects = [
  new Project('Portfolio', '11/09/2020', portfolioPreview, false, 'portfolioProject'),
  new Project('Learn Python', '11/10/2020', pythonLogo, true, 'learnPythonProject')
];

export default projects;