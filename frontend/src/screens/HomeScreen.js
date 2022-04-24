import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown,Navbar,Container,Col, Row, Nav } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
          <Container>
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="Categories" menuVariant="dark">
                <LinkContainer to={`/category/1`}><NavDropdown.Item >Casual</NavDropdown.Item></LinkContainer>
                <LinkContainer to={`/category/4`}><NavDropdown.Item >Watch</NavDropdown.Item></LinkContainer>
                <LinkContainer to={`/category/2`}><NavDropdown.Item >Fancy</NavDropdown.Item></LinkContainer>
                <LinkContainer to={`/category/3`}><NavDropdown.Item >Shoes</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Route render={({ history }) => <SearchBox history={history} />} />
              </Navbar.Collapse>
            </Nav>
            <Nav>
              <NavDropdown id="nav-dropdown-dark-example" title="Sort" menuVariant="dark">
                <LinkContainer to={`/products/lowtohigh`}><NavDropdown.Item >Low To High</NavDropdown.Item></LinkContainer>
                <LinkContainer to={`/products/hightolow`}><NavDropdown.Item >High To Low</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
      </header>
      {/* <Carousel variant="dark">
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>
          <Message variant="danger">{error}</Message>
        </h3>
      ) : (
        <Row>
          {products.map((prod) => (
            <Col key={prod.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={prod} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
