import './App.css';
import {Route, Switch} from 'react-router';

import PortfolioView from './views/HomeView';
import PortfolioProjectView from './views/PortfolioProjectView';
import LearnPythonProjectView from './views/LearnPythonProjectView';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={PortfolioView}/>
      <Route path='/portfolioProject' component={PortfolioProjectView}/>
      <Route path='/learnPythonProject' component={LearnPythonProjectView}/>
    </Switch>
  );
}

export default App;
