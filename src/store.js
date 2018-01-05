import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// export default createStoreWithMiddleware(reducers);

// import { createStore, applyMiddleware } from 'redux';

// import rootReducer from './reducers/index';

// const store = createStore(rootReducer);

// export default store

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;