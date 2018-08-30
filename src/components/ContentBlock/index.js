import { Text, RichText, Image } from "@sitecore-jss/sitecore-jss-react";

import React, { Component } from 'react';

class ContentBlock extends Component {
  render() {
    return (
      <React.Fragment>
        <Text tag="h4" className="display-4" field={this.props.fields.heading} />
        <RichText className="contentDescription" field={this.props.fields.content} />
        <Image field={this.props.fields.hero} />
      </React.Fragment>
    );
  }
}

export default ContentBlock;
