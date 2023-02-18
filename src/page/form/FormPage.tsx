import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import './FormPage.scss';

interface FormState {
  email: string;
  password: string;
  checkbox: boolean;
}

export default function FormPage() {
  const [result, setResult] = useState('');
  const { register, handleSubmit } = useForm<FormState>({ mode: 'onBlur' });

  const onSubmit = (params: FormState) => {
    setResult(JSON.stringify(params, null, 4));
  }

  return (
    <div className="FormPage">
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" {...register('email')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register('password')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" {...register('checkbox')} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {result && <Card className="mt-3">
          <Card.Header>
            Result
          </Card.Header>
          <Card.Body>
            <pre className="mb-0"><code>{result}</code></pre>
          </Card.Body>
        </Card>}
      </Container>
    </div>
  )
}
