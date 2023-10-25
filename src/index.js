import React from 'react'; //если пишем без слеша(/) и точки, то папка находится в node_modules
import ReactDOM from 'react-dom/client';
import './index.css'; //точка и слеш-означает путь где находится папка
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

