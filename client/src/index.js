import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteState from './context/NoteState';
// import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NoteState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NoteState>

);
