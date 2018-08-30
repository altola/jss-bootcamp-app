import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const navItems = this.props.navItems.map((nav, index) => 
        <NavItem key={index}>
            <NavLink to={nav.path}>{nav.name}</NavLink>
            {/* <NavLink href={nav.path}>{nav.name}</NavLink> */}

        </NavItem>
    )

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink to='/'>Launch Sitecore JSS</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navItems}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;