import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './components/ReduxProvider';

const render = (Component) => {
    ReactDOM.render(
    <ReduxProvider/>,
    document.getElementById('root'),
  );
};

render(ReduxProvider);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const newApp = require('./components/App').default;
        render(newApp);
    });
}
