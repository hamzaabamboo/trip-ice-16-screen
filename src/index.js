import React from 'react';
import ReactDOM from 'react-dom';

import App from './common/App';

import 'normalize.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
