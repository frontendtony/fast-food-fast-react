import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(
    rootReducer, 
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
    )
  );

  return store;
}



export default configureStore;
