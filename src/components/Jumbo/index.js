import React from "react";
import { Text } from "@sitecore-jss/sitecore-jss-react";
import { Jumbotron, Button } from "reactstrap";

const Jumbo = props => (
  <Jumbotron>
    <h1 className="display-3">{props.fields.title ? props.fields.title.value : 'default'}</h1>
    <p className="lead">
      This is a simple hero unit, a simple Jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className="my-2" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <p className="lead">
      <Button color="primary">Learn More</Button>
    </p>
  </Jumbotron>
);

export default Jumbo;
