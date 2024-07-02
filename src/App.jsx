import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Todolistin from './Components/TodolistUI';

function App() {
  
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={6}>
          <Todolistin/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
