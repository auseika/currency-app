import React from 'react';
import {AndroidSafeArea} from './Elements';

const Screen: React.StatelessComponent = (props) => (
  <AndroidSafeArea>{props.children}</AndroidSafeArea>
);

export default Screen;
