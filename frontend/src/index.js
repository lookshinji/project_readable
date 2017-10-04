//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';
import { createStore } from 'redux';
import appReducer from './reducers';
import { Provider } from 'react-redux';

//Components
import App from './components/App';

//CSS
import './styles/main.less';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
