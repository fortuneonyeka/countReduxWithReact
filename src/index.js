import React from 'react';
import ReactDOM from 'react-dom';

import { store } from "./redux/store/Store";
import './index.css';
import App from './App';



const render = () => {
  ReactDOM.render(
  <React.StrictMode>
    {/* <Provider > */}
    <App store={store}/>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
} 

render()
store.subscribe(render)


