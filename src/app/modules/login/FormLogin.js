import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { ButtonSubmit } from '../shared/button';
import { Label } from '../shared/form/Label';
import * as ROUTES from '../../constants/routes';

const FormLogin = ({ history, firebase }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    firebase.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        toast.success(t('NOTIFY.LOGIN_SUCCESS'));
        history.push(ROUTES.HOME);
      })
      .catch(e => {
        toast.error(e.message);
      })
  }

  return (
    <form className="login" onSubmit={onSubmit}>
      <h4>{t('FORM.LOGIN.TITLE')}</h4>
      <p className="mb-5">{t('FORM.LOGIN.SUB_TITLE')}</p>
      <div className="form-group row">
        <Label type="required">{t('EMAIL')}</Label>
        <Col sm={10}>
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="text" placeholder={t('EMAIL')} />
        </Col>
      </div>
      <div className="form-group row">
        <Label type="required">{t('PASSWORD')}</Label>
        <Col sm={10}>
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder={t('PASSWORD')} />
        </Col>
      </div>
      <div className="offset-sm-2">
        <Link className="mx-1" to="/">{t('FORGOT_PASSWORD')}</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit>{t('LOGIN')}</ButtonSubmit>
      </div>
    </form>
  )
}

export default withRouter(FormLogin);
