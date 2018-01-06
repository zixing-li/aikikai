import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './components/Home';
import Gallery from './containers/Gallery';
import Location from './components/Location';
import Aikido from './components/Aikido';
import Instructors from './components/Instructors';
import Schedule from './components/Schedule';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/location" component={Location} />
        <Route path="/aikido" component={Aikido} />
        <Route path="/instructors" component={Instructors} />
        <Route path="/schedule&fees" component={Schedule} />
      </App>
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();