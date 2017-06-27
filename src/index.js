import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
