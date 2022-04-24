import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import URL from "../utils/server";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToWishlist, removeFromWishlist } from "../actions/cartActions";

const WishlistScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const { wishlistItems } = wishlist;


  useEffect(() => {
    if (productId) {
      dispatch(addToWishlist(productId,qty));
    }
  }, [dispatch, productId,qty]);

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const checktocart = () => {
    history.push(`/cart/${productId}`);
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Wishlist Items</h1>
        {wishlistItems.length === 0 ? (
          <Message>
            Your Wishlist is Empty
            <Link to="/">
              {" "}
              <bold>Go Back </bold>
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {wishlistItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>PKR {item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromWishlistHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                  <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    // disabled={wishlistItems.length === 0}
                    onClick={checktocart}
                    ><i class="fas fa-shopping-cart"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
             
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        
      </Col>
    </Row>
  );
};

export default WishlistScreen;
