import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SquareRoot from './SquareRoot';

const App = () => {

  const [ value, setValue ] = useState('');
  const [ accuracy, setAccuracy ] = useState(3);

  const calcSquareRoot = () => {
    const squareRoot = new SquareRoot(value, accuracy);
    const calcAnswer = squareRoot.calc();
    if (calcAnswer ? alert(squareRoot.calc()) : alert('Ошибка вычисления'));
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Form>

            <Form.Group className="d-flex justify-content-center align-items-center" controlId="numberInput">
              <Row>
                <Col>
                  <Form.Label className='mx-3'>Введите число</Form.Label>
                  <Form.Control value={value} onChange={e => setValue(e.target.value)} type="text" placeholder="Введите число" />
                  <Form.Label className='mx-3 mt-5'> Введите точность</Form.Label>
                  <Form.Control value={accuracy} onChange={e => setAccuracy(e.target.value)} type="text" placeholder="Введите точность" />
                </Col>

              </Row>

              <Button className="m-5" variant="dark" onClick={calcSquareRoot}>Посчитать квадратный корень</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


export default App;
