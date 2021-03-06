import React from 'react';

import { connect } from 'react-redux'

// import { Container } from './styles';

const Sidebar = () => (
<aside>
{ modules.map(module => (
  <div key={module.id}>
    <strong>{module.title}</strong>
    <ul>
      { module.lessons.map(lessons => (
        <li key={lessons.id}>{lessons.title}</li>
      ))}
    </ul>
  </div>
))}
</aside>);

export default connect(state => ({modules: state}))(Sidebar);
