import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
document.body.setAttribute("style", "display:flex; background-color:#e7ecf2");
document.getElementById('root').setAttribute("style", "display:flex; flex-wrap: wrap; margin: 0 auto");

ReactDOM.render(<App />, document.getElementById('root'));

