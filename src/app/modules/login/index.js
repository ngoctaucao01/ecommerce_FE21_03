import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { HeaderTitleMedium } from '../shared/header-title';
import { ButtonHeaderForm } from '../shared/button';
import FromLogin from './FormLogin';
import { withFirebase } from '../firebase';
import * as ROUTES from '../../constants/routes';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={ROUTES.HOME}>{t('HOMEPAGE')}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{t('LOGIN')}</li>
        </ol>
      </nav>
      <section>
        <div className="d-flex">
          <HeaderTitleMedium title={t('LOGIN')} path={ROUTES.LOGIN} />
          <ButtonHeaderForm path={ROUTES.REGISTER}>{t('REGISTER')}</ButtonHeaderForm>
        </div>
        <Row>
          <Col md={12}>
            <FormLoginFirebase />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

const FormLoginFirebase = compose(
  withRouter,
  withFirebase
)(FromLogin)

export default Login;
