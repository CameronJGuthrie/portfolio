import './App.css';
import {Route, Switch} from 'react-router';

import PortfolioView from './views/HomeView';
import PortfolioProjectView from './views/PortfolioProjectView';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={PortfolioView}/>
      <Route path='/portfolioProject' component={PortfolioProjectView}/>
    </Switch>
  );
}

export default App;
