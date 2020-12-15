import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

import PersistentDrawerLeft from './components/Menu';

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/education">Home</Link>
      <div>
        <PersistentDrawerLeft/>
      </div>
      <Switch>
            <Route path="/education" component= {Education}>
            </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
