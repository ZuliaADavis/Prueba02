import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import loginEmailPassword from "../functions/loginEmailPassword";

function Login() {
  async function submitHandler(e) {
    e.preventDefault();
    const correo = document.getElementById("formCorreo").value;
    const contraseña = e.target.formContraseña.value;
    await loginEmailPassword(correo, contraseña);
  }

  return (
    <Container>
      <h1>Inicia sesión, por favor</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formCorreo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formContraseña">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar sesión
        </Button>
      </Form>
    </Container>
  );
}

export default Login;