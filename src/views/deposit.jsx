import "../App.css";
import { Container, Card, Row, Form } from "react-bootstrap";
import Balance from "./Balance";
import { useState } from "react";

function Deposit() {
  const [totalState, setTotalState] = useState(0);
  let transactionState = 0; // state of this transaction
  let status = `Account Balance $ ${totalState}`;

  const handleChange = (event) => {
    transactionState = Number(event.target.value);
  };
  const handleSubmit = (e) => {
    setTotalState(totalState + transactionState);
    e.preventDefault();
  };

  return (
    <Container className="min-vh-100 p-4">
      <Row className="m-auto">
        <Card style={{ width: "30rem" }} className="row">
          <Card.Body>
            <Card.Title>
              <h1>Deposit</h1>
            </Card.Title>
            <Card.Text>
              Please specify deposit amount
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicName"
                ></Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Balance onChange={handleChange} />
                </Form.Group>
                <h2 id="total">{status}</h2>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Deposit;
