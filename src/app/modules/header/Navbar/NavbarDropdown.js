import React from 'react';
import { Row, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import NavbarDropdownList from './NavbarDropdownList';
import NavbarDropdownImage from './NavbarDropdownImage';

function NavbarDropdown({ title }) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle className="nav-link nav-link-menu" nav caret>
        {title}
      </DropdownToggle>
      <DropdownMenu>
        <Row>
          <NavbarDropdownList title="Rượu vang đỏ" />
          <NavbarDropdownList title="Rượu vang" />
          <NavbarDropdownList title="Rượu ngoại" />
          <NavbarDropdownImage img="../../assets/images/menu.jpg" />
        </Row>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default NavbarDropdown;
