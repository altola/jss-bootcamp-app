import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Carousel = (props) => (
  <div>
    <h3>Carousel Component</h3>
    <Text field={props.fields.slides} />
  </div>
);

export default Carousel;
