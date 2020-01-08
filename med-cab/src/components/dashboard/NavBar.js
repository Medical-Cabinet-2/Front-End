import React, { useState } from 'react';
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
    DropdownItem
} from 'reactstrap';
import styled from 'styled-components';

const NavBarre = styled(NavBar)`
    background: teal;
`;

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <NavBarre color='teal' dark expand='md'>
                <NavbarBrand href="">Med Cabinet</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink to='/intake/symptoms' className="NavLink">Recommender</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/dashboard" className="NavLink">Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </NavBarre>
        </div>
    );
};

export default NavBar;