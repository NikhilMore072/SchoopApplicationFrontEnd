
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/style.css';

function NavBar() {
    return (
        <div>
            <div className="container" style={{ backgroundColor: '#9999ff', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <div className='' style={{ height: '80px' }}>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>St. Arnold's Central School (2023-2024)</h1>
                </div>
            </div>

            <Navbar className="navbar navbar-expand-lg shadow " expand="lg">
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/dashboard">
                        <span className="ml-2 font-weight-bold">Dashboard</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Students" className="navbar-dropdown">
                                {/* <Link to="/student-create" ><NavDropdown.Item >Add Student</NavDropdown.Item> </Link> */}

                                <NavDropdown.Item ><Link to="/student-create" style={{ color: 'inherit', textDecoration: 'none' }}
                                >Add Student</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/student-list" style={{ color: 'inherit', textDecoration: 'none' }}
                                >Student List</Link></NavDropdown.Item>
                                {/* <NavDropdown.Item ><Link to="/student-demo-table" style={{ color: 'inherit', textDecoration: 'none' }}
                                >Student Demo Table</Link></NavDropdown.Item> */}
                                <NavDropdown.Item >Edit Student</NavDropdown.Item>
                                <NavDropdown.Item>Delete Student</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Manage Staff" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Add Staff</NavDropdown.Item>
                                <NavDropdown.Item href="#">Edit Staff</NavDropdown.Item>
                                <NavDropdown.Item href="#">Delete Staff</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Curriculum" className="navbar-dropdown">
                                <NavDropdown.Item href="#">View Curriculum</NavDropdown.Item>
                                <NavDropdown.Item href="#">Edit Curriculum</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Library" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Add Book</NavDropdown.Item>
                                <NavDropdown.Item href="#">Edit Book</NavDropdown.Item>
                                <NavDropdown.Item href="#">Delete Book</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="View" className="navbar-dropdown">
                                <NavDropdown.Item href="#">View Students</NavDropdown.Item>
                                <NavDropdown.Item href="#">View Staff</NavDropdown.Item>
                                <NavDropdown.Item href="#">View Curriculum</NavDropdown.Item>
                                <NavDropdown.Item href="#">View Library</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Finance" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Financial Reports</NavDropdown.Item>
                                <NavDropdown.Item href="#">Expenses</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Periodicals" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Add Periodical</NavDropdown.Item>
                                <NavDropdown.Item href="#">Edit Periodical</NavDropdown.Item>
                                <NavDropdown.Item href="#">Delete Periodical</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Masters" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Masters</NavDropdown.Item>
                                <NavDropdown.Item href="#">Edit Master Record</NavDropdown.Item>
                                <NavDropdown.Item href="#">Delete Master Record</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Reports" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Generate Report</NavDropdown.Item>
                                <NavDropdown.Item href="#">View Report</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="System" className="navbar-dropdown">
                                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#">Users</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavBar;
