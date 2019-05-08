import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const wrapper = document.getElementById('editor');
const render = () => {
  ReactDOM.render(<App
    ref={(appComponent) => {
      window.appComponent = appComponent;
    }}
    value={window.config.value}
    options={window.config.options} />,
  wrapper);
};

window.updateConfig = (property, value) => {
  if (!window.appComponent) return;
  window.config[property] = value;
  window.appComponent.setState({
    value: window.config.value,
    options: window.config.options,
  });
};

if (wrapper) render();
