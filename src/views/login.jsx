import "../App.css";
import React from "react";
import { Card, Row, Container, Form, Button } from "react-bootstrap";
import { useContext, useReducer } from "react";
import { UserContext } from "../context/context";
import MatchUser from "../utils/utils";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username o password",
        isLoading: false,
        email: "",
        password: "",
      };
    }

    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      break;
  }
  return state;
}

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  error: "",
  isLoading: false,
  status: "",
};

function Login() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, isLoading, error, isLoggedIn } = state;

  const ctx = useContext(UserContext);
  console.log(ctx);

  const logout = async (e) => {
    e.preventDefault();
    dispatch({ type: "logout" });
    userLogout({ email, ctx });

    function userLogout({ email, ctx }) {
      for (let i = 0; ctx.users.length > i; i++) {
        if (email === ctx.users[i].email) {
          return (ctx.users[i].isLoggedIn = false);
        }
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    console.log("submit");

    try {
      console.log({ email, password, ctx });
      await MatchUser({ email, password, ctx });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <Container className="p-4 container d-flex justify-content center align-items-center min-vh-100">
      <Row className="m-auto">
        <Card style={{ width: "30rem" }} className="row">
          {isLoggedIn ? (
            <>
              <h1>Hello {email}!</h1>
              <Button
                className="text-center"
                variant="primary"
                onClick={logout}
              >
                Log out
              </Button>
            </>
          ) : (
            <Form onSubmit={onSubmit}>
              <Card.Title className="text-center w-100 p-3">
                <h1>Log in</h1>
              </Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      field: "email",
                      value: e.currentTarget.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: "field",
                      field: "password",
                      value: e.currentTarget.value,
                    })
                  }
                />
                {error && (
                  <Form.Label className="text-danger">{error}</Form.Label>
                )}
              </Form.Group>
              <Button
                className="text-center"
                variant="primary"
                type="submit"
                disabled={isLoading}
              >
                Log in
              </Button>
            </Form>
          )}
        </Card>
      </Row>
    </Container>
  );
}

export default Login;
