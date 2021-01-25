import './css/App.css';
import RailBaron from './pages/Railbaron'
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <main>
        <header></header>
          <Switch>
            <Route path='/railbaron' exact render={() => <RailBaron/>}/>
            <Route path='/' render={()=><div>Home Page</div>}/>
          </Switch>
        <footer></footer>
      </main>
    </Router>
  );
}

export default App;
