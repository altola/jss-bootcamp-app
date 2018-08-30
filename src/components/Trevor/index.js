import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Trevor = (props) => (
  <div>
    <h2>My name is: </h2>
    <Text field={props.fields.name} />
  </div>
);

export default Trevor;
