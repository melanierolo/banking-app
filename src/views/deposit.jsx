import "../App.css";
import { Container, Card, Row, Form } from "react-bootstrap";
import Balance from "./balance";
import React, { useState, useContext } from "react";
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
    console.log(transactionState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalState(totalState + transactionState);
    console.log(totalState + transactionState);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((isLoggedInDeposit = true && balanceInitial !== 0)) {
          let mycopy = [...userLoggedIn];
          console.log(mycopy);
          let [{ balance, name, email, password, isLoggedId, id }] = mycopy;

          resolve(
            (ctx.users[id - 1] = {
              name,
              email,
              password,
              isLoggedId: false,
              id,
              balance: totalState + transactionState + balanceInitial,
            }),
            alert("Deposit successful")
          );
        } else {
          reject();
        }
      }, 3000);
    });
  };

  return (
    <Container className="p-4 container d-flex justify-content center align-items-center min-vh-100">
      <Row className="m-auto">
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
