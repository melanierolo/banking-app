import '../App.css';
import React, { useState } from 'react';
import { Card, Row, Container, Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../context/context';

function CreateAccount() {
  const [status, setStatus] = useState('');
  const [show, setShow] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ctx = useContext(UserContext);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function validate(field, label, setError) {
    if (!field) {
      setError(true);
      setStatus('Error: ' + label);
      setTimeout(() => {
        setStatus('');
        setError(false);
      }, 5000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name', setNameError)) return;
    if (!validate(email, 'email', setEmailError)) return;
    if (!validate(password, 'password', setPasswordError)) return;

    ctx.users.push({
      balance: 100,
      name,
      email,
      password,
      isLoggedIn: false,
      id: ctx.users.length + 1,
    });

    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <>
      <Container className='p-4 container d-flex justify-content center align-items-center min-vh-100'>
        <Row className='m-auto'>
          <Card style={{ width: '30rem' }} className='row py-4' status={status}>
            {show ? (
              <Form>
                <Card.Title className='text-center w-100 p-3'>
                  <h1>Create Account</h1>
                </Card.Title>
                <Form.Group className='mb-3' controlId='formBasicName'>
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                      setNameError(false);
                    }}
                  />
                  {nameError && (
                    <Form.Label className='text-danger'>
                      Name required
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                      setEmailError(false);
                    }}
                  />
                  {emailError && (
                    <Form.Label className='text-danger'>
                      Email required or invalid
                    </Form.Label>
                  )}
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.currentTarget.value);
                      setPasswordError(false);
                    }}
                  />
                  {passwordError && (
                    <Form.Label className='text-danger'>
                      Minimum eight characters, at least one letter and one
                      number
                    </Form.Label>
                  )}
                </Form.Group>

                <Button
                  className='d-flex justify-content-center mx-auto px-4'
                  variant='primary'
                  size='lg'
                  type='submit'
                  onClick={handleCreate}
                  disabled={name === '' && email === '' && password === ''}
                >
                  Sign up
                </Button>
              </Form>
            ) : (
              <>
                <Container className='text-center w-100 p-3 '>
                  <h1>You have signed up successfully</h1>
                  <button
                    type='submit'
                    className='btn btn-light'
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
