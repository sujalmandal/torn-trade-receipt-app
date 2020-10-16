import React from 'react';
import InitialiserComponent from './components/InitialiserComponent'
import ReceivedItemsComponent from './components/ReceivedItemsComponent'
import SentItemsComponent from './components/SentItemsComponent'
import BalanceDetailComponent from './components/BalanceDetailComponent'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col><InitialiserComponent/></Col>
      </Row>
      <Row>
        <Col><ReceivedItemsComponent/></Col>
        <Col><SentItemsComponent/></Col>
      </Row>
      <Row>
        <Col><BalanceDetailComponent/></Col>
      </Row>
    </Container>
  );
}

export default App;