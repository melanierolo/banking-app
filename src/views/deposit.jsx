import "../App.css";
import { Container, Card, Row, Form } from "react-bootstrap";
import Balance from "./Balance";
import { useState, useContext } from "react";
import { UserContext } from "../context/context";

function Deposit() {
  const ctx = useContext(UserContext);
  let isLoggedInDeposit = false;
  let transactionState = 0;
  let balanceInitial = 0;
  let id = 0;

  const userLoggedIn = ctx.users.filter((a) => a.isLoggedIn === true);
  console.log(userLoggedIn);

  if (userLoggedIn.length !== Number(0)) {
    isLoggedInDeposit = true;
    balanceInitial = userLoggedIn[0].balance;
    console.log(transactionState);
    id = userLoggedIn[0].id;
    console.log(id);
  }

  const [totalState, setTotalState] = useState(0);
  // state of this transaction
  let status = totalState + transactionState + balanceInitial;

  const handleChange = (event) => {
    transactionState = Number(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalState(totalState + transactionState);
    //ctx.users[id].balance = totalState + transactionState;
  };

  //ctx.users[id].balance = totalState + transactionState;

  return (
    <Container className="min-vh-100 p-4">
      <Row className="m-auto my-4">
        <Card style={{ width: "30rem" }} className="row">
          {isLoggedInDeposit ? (
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
                  <h2>Account Balance</h2>
                  <h2 id="total">{status}</h2>
                </Form>
              </Card.Text>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Title className="my-4">
                <h1>Login required</h1>
              </Card.Title>
              <Card.Text>
                You can't see data for this form.Please login first
              </Card.Text>
            </Card.Body>
          )}
        </Card>
      </Row>
    </Container>
  );
}

export default Deposit;
