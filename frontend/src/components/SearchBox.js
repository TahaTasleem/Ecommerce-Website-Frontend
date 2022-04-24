import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDeafult();
    if (keyword.trim()) {
      history.push('/products/`${keyword}`');
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={(inputValue) =>
      history.push(`/searchproduct/${keyword}`) }inline>
      <Form.Control
        type="text"
        // name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Product..."
        className="mr-sm-2 ml-sm-5 px-10 custom-search"
      ></Form.Control>
      <Button type="submit" variant="outline-danger" className="p-2 custom-btn">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
