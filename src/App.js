import './assets/css/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from 'pages/Homepage';
import Details from 'pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories/:idc" component={Details}/>
          <Route path="/categories/:idc/products/:id" component={Details}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
