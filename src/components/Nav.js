import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class MainNavbar extends React.Component {
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
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/about/">Về Developer Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/project/new/">Tạo Project mới</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Danh mục
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Project Công nghệ
                                </DropdownItem>
                                <DropdownItem>
                                    Project Từ thiện
                                </DropdownItem>
                                <DropdownItem>
                                    Project Môi trường
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/signup/">Đăng ký</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signin/">Đăng nhập</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div> 
        )
    }
}

export default MainNavbar