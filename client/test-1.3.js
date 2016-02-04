import React from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
  let root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
  
  render((
    <h1>Hello World!</h1>
  ), document.getElementById('root'));
});
