import {Switch, Route} from 'react-router-dom';
import Principal from './Components/Pages/Principal';
import Information from './Components/Pages/Information';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Principal></Principal>
        </Route>
        <Route path="/information">
          <Information></Information> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
