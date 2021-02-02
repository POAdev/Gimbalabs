import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import SiteTitle from './SiteTitle';
import IdeaList from './IdeaList';
import Weather from './Weather';
//import './App.css'
import MetadataCall from './MetadataCall';
import Menu from './components/Menu';

function App() {

  
  return (
    <Router>
      <Menu/>

    <div class="container">
    
      
      <SiteTitle/>
      <Switch>
        <Route path="/ideas">
          <IdeaList/>
        </Route>
        <Route path="/metadata">
          <MetadataCall/>
        </Route>
        <Route path="/weather">
          <Weather/>
        </Route>

        <Route path="/">
          <h1>Home page</h1>
        </Route>
        
        
      </Switch>
      

    
  </div>
    
    
    
    
    
    </Router>
    
  );
}

export default App;
