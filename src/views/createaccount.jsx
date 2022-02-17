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

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
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
      <Container className="p-4 container d-flex justify-content center align-items-center">
        <Row className="m-auto">
          <Card style={{ width: "20rem" }} className="row" status={status}>
            {show ? (
              <Form>
                <div className="text-center w-100">
                  <h1>Create Account</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your password with anyone else.
                  </Form.Text>
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
                <h5>Success</h5>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Add another account
                </button>
              </>
            )}
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default CreateAccount;
