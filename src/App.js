import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemSelect from './ItemSelect';
import All from './home_router/All';
import Collected from './home_router/Collected';
import MintPage from './MintPage';
import {useState} from 'react';

function App() {
  const [wallet, setWallet] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="itemSelect">
        <ItemSelect/>
      </div>
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "/collected">
            <Collected wallet = {wallet}></Collected>
          </Route>
          <Route path = "/all">
            <All/>
          </Route>
          <Route path = "/mint">
            <MintPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
