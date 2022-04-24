import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import HomeScreen1 from "./screens/HomeScreen1";
import ProductScreen from "./screens/ProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SortScreen from "./screens/SortScreen";
import CartScreen from "./screens/CartScreen";
import WishlistScreen from "./screens/WishlistScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import ThankYou from "./components/ThankYou";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import CustomerCareScreen from "./screens/CustomerCareScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/searchproduct/:keyword" component={HomeScreen1} />
          <Route path="/orderhistory" component={OrderHistoryScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/category/:cat_id" component={CategoryScreen} />
          <Route path="/products/:keyword" component={SortScreen} />
          <Route path="/Customer_care" component={CustomerCareScreen} />
          <Route path="/trending" component={SortScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/wishlist/:id?" component={WishlistScreen} />
          <Route path="/thankyou" component={ThankYou} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
