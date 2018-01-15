import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p',{}, 'Testing react and react-dom import');
ReactDOM.render(template,document.getElementById('app'));