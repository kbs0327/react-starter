import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import 'todomvc-app-css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 몇번 호출했는지 명확하게 하기 위해 StrictMode 제거
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
