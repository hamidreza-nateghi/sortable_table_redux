import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = process.env.NODE_ENV === 'development' ? [logger] : [];
const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export const store = createStore(
  reducers,
  enhancer,
);
