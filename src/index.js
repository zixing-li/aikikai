import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import Home from './components/Home';
import Gallery from './components/Gallery';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      {/* <Route path="/collection" component={Collection} /> */}
      {/*<Route path="/album" component={()=>(<div><Album/><PlayerBar/></div>)} />*/}
      {/* <Route path="/album" component={Album} /> */}
    </App>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();