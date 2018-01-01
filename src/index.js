import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Aikido from './components/Aikido';
import Instructors from './components/Instructors';
import Fee from './components/Fee';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/location" component={Location} />
      <Route path="/aikido" component={Aikido} />
      <Route path="/instructors" component={Instructors} />
      <Route path="/schedule&fee" component={Fee} />
    </App>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();