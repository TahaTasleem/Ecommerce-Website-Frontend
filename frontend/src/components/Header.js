import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">
              <span style={{ color: "black" }}>Ecommerce Shop </span>
            </Navbar.Brand>
          </LinkContainer>


          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="trending">Trending Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="Customer_care">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>


          <Nav className="ml-auto">
          <LinkContainer to="/wishlist">
              <Nav.Link><i class="fas fa-clipboard-check"></i>{" "}Wishlist</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link><i className="fas fa-shopping-cart"></i>{"  "}Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.fname} id="username">
                <LinkContainer to={`/profile/${userInfo.id}`}>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`/orderhistory`}>
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Log Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link> <i className="fas fa-user"></i>{"  "}Login</Nav.Link>
              </LinkContainer>
            )}
            <Nav.Link href="http://localhost:1234/admindashboard" target="_blank" ><i className="fas fa-user"></i>{"  "}Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;