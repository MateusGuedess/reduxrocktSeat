import React from 'react';

import { connect } from 'react-redux';

const Video = (activeModule, activeLesson) => (
  <div>
    <strong>{activeModule}</strong>
    <span>activeLesson</span>
  </div>
);

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video);

