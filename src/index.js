import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Location from './components/Location';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/location" component={Location} />
      {/*<Route path="/album" component={()=>(<div><Album/><PlayerBar/></div>)} />*/}
    </App>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();