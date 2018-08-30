import React from "react";
import { RichText, Text, Link } from "@sitecore-jss/sitecore-jss-react";
import { Jumbotron, Button } from "reactstrap";

const Jumbo = ({fields, params}) => (
  <Jumbotron>
    <Text tag="h1" className={params.titleClass} field={fields.title} />
    <RichText field={fields.text} />
    <p className={params.containerClass}>
      <Link className={params.linkClass} field={fields.callToAction} />
    </p>
  </Jumbotron>
);

export default Jumbo;
