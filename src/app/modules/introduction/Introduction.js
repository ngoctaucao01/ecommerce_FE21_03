import React from 'react';
import Breadcrumb from './Breadcrumb';
import { Container } from 'reactstrap'
import Introduce from './Introduce'


function Introduction() {
  return (
    <>
      <Container>
        <Breadcrumb/>
        <Introduce/>
      </Container>
    </>
  )
}

export default Introduction;
