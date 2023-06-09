import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    //     Collapse,
    Navbar,
    //     // NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as Navlink
    //     // UncontrolledDropdown,
    //     // DropdownToggle,
    //     // DropdownMenu,
    //     // DropdownItem,
    //     // NavbarText,
} from 'reactstrap';

import UserContext from "./userContext";

//put multiple NavLinks in an array inside of the conditional

function NavBar() {
    const user = useContext(UserContext);
    return (
        <div>
            <Navbar color="dark">
                <NavbarBrand>
                    <NavLink exact to="/">
                        Jobly
                    </NavLink>
                </NavbarBrand>
                <Nav>
                    <NavItem>
                        <Navlink>
                            <NavLink exact to="/companies">
                                Companies
                            </NavLink>
                        </Navlink>
                    </NavItem>
                    <NavItem>
                        <Navlink>
                            <NavLink exact to="/jobs">
                                Jobs
                            </NavLink>
                        </Navlink>
                    </NavItem>


                    {user ?
                        [<NavItem>
                            <Navlink>
                                <NavLink key="profile" exact to="/profile">
                                    Profile
                                </NavLink>
                            </Navlink>
                        </NavItem>,
                        <NavItem>
                            <Navlink>
                                <NavLink key="logout" exact to="/logout">Logout</NavLink>
                            </Navlink>
                        </NavItem>] :
                        [<NavItem>
                            <Navlink>
                                <NavLink key="login" exact to="/login">
                                    Login
                                </NavLink>
                            </Navlink>
                        </NavItem>,
                        <NavItem>
                            <Navlink>
                                <NavLink key="signup" exact to="/signup">
                                    Sign Up
                                </NavLink>
                            </Navlink>
                        </NavItem>]
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;