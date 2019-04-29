import React from 'react';
import ReactDOM from 'react-dom';
import Creatives from './Creatives';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Creatives />, div);
  ReactDOM.unmountComponentAtNode(div);
});
