import './assets/css/app.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Homepage from 'pages/Homepage';
import ProductDetails from 'pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}/>
        <Route path="/categories/:id" component={ProductDetails}/>
      </Router>
    </div>
  );
}

export default App;
