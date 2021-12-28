import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FormRegister from './FormRegister';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const Register = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={ROUTES.HOME}>{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('REGISTER')}</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title={t('REGISTER')} path={ROUTES.REGISTER} />
          <ButtonHeaderForm path={ROUTES.LOGIN}>{t('LOGIN')}</ButtonHeaderForm>
        </div>
        <Row>
          <Col md={12}>
            <FormRegisterFirebase />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

const FormRegisterFirebase = compose(
  withRouter,
  withFirebase
)(FormRegister);

export default Register;
