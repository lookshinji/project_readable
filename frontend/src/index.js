//Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from  'react-router-dom';

//Components
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//CSS
import './styles/main.less';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
