//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

//Components
import appReducer from './reducers';
import App from './components/App';

//CSS
import './styles/main.less';

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
