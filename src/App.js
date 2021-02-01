import './css/App.css';
import RailBaron from './pages/Railbaron'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  
  return (
    <Router>
      <main>
        <header></header>
          <Switch>
            <Route path='/railbaron' exact render={() => <RailBaron/>}/>
            <Route path='/' render={()=><Home />}/>
          </Switch>
        <footer></footer>
      </main>
    </Router>
  );
}

export default App;
