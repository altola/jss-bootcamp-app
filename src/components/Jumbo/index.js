import React from "react";
import { RichText, Text, Link } from "@sitecore-jss/sitecore-jss-react";
import { Jumbotron, Button } from "reactstrap";

// const Jumbo = props => (
//   <Jumbotron>
//     <Text tag="h1" className="display-3" field={props.fields.title} />
//     <RichText field={props.fields.text} />
//     <p className="lead">
//       <Link className="btn btn-primary" field={props.fields.callToAction} />
//     </p>
//   </Jumbotron>
// );

const Jumbo = ({fields, params}) => (
  <Jumbotron>
    <Text tag="h1" className="display-3" field={fields.title} />
    <RichText field={fields.text} />
    <p className={params.containerClass}>
      <Link className={params.linkClass} field={fields.callToAction} />
    </p>
  </Jumbotron>
);

export default Jumbo;
