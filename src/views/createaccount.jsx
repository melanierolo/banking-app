import "../App.css";
import React from "react";
import { Card, Row, Container, Form, Button } from "react-bootstrap";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/context";

function CreateAccount() {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(UserContext);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 5000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100, isLoggedIn: false });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <>
      <Container className="p-4 container d-flex justify-content center align-items-center min-vh-100">
        <Row className="m-auto">
          <Card style={{ width: "30rem" }} className="row" status={status}>
            {show ? (
              <Form>
                <Card.Title className="text-center w-100 p-3">
                  <h1>Create Account</h1>
                </Card.Title>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                  {name === "" && (
                    <Form.Label className="text-danger">
                      Name required
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  {emailRegex.test(email) === false && (
                    <Form.Label className="text-danger">
                      Email required or invalid
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  {passwordRegex.test(password) === false && (
                    <Form.Label className="text-danger">
                      Minimum eight characters, at least one letter and one
                      number
                    </Form.Label>
                  )}
                </Form.Group>
                <Button
                  className="text-center"
                  variant="primary"
                  type="submit"
                  onClick={handleCreate}
                >
                  Sign up
                </Button>
              </Form>
            ) : (
              <>
                <Container className="text-center w-100 p-3 ">
                  <h1>You have signed up successfully</h1>
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={clearForm}
                  >
                    Add another account
                  </button>
                </Container>
              </>
            )}
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default CreateAccount;
