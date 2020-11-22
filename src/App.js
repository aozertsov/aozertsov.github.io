import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

import PersistentDrawerLeft from './components/Menu';

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <div>
      <div>
         <Tabs>
          <TabList>
            <Tab><Link to="/education">Education</Link></Tab>
            <Tab><Link to="/experience">Experience</Link></Tab>
            <Tab><Link to="/skills">Skills</Link></Tab>
          </TabList>

          <TabPanel>
            <Route path="/education" component={Education}/>
          </TabPanel>
          <TabPanel>
            <Route path="/experience" component={Experience}/>
          </TabPanel>
          <TabPanel>
            <Route path="/skills" component={Skills}/>
          </TabPanel>
        </Tabs>
      </div>

      <PersistentDrawerLeft/>
    </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
