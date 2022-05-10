import "../App.css";
import React from "react";
import { Form, Button } from "react-bootstrap";

function Balance({ onChange }) {
  return (
    <Form.Label className="label huge">
      <Form.Control
        type="number"
        placeholder="Enter an amount"
        min="0"
        onChange={onChange}
      />
      <Button className="text-center" variant="primary" type="submit">
        Confirm
      </Button>
    </Form.Label>
  );
}

export default Balance;
