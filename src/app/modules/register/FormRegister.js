import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Label } from '../shared/form/Label';
import { ButtonSubmit, ButtonGoBack } from '../shared/button';
import * as ROUTES from '../../constants/routes';

const FormRegister = ({ history, firebase }) => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const isInvalid = password !== rePassword
    || password === ''
    || email === ''
    || firstName === ''
    || lastName === '';

  const onSubmit = e => {
    e.preventDefault();
    const roles = {};

    firebase.doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return firebase.user(authUser.user.uid)
          .set({
            uid: authUser.user.uid,
            email,
            firstName,
            lastName,
            newsletter,
            roles,
            createdAt: firebase.serverValue.TIMESTAMP,
          })
      })
      .then(() => {
        toast.success(t('NOTIFY.REGISTER_SUCCESS'));
        history.push(ROUTES.HOME);
      })
      .catch(e => {
        toast.error(e.message)
      })
  }

  return (
    <form className="login" onSubmit={onSubmit}>
      <h5 className="mb-3 text-uppercase">{t('USER.PERSONAL_INFORMATION')}</h5>
      <div className="form-group row">
        <Label type="required">{t('USER.FIRST_NAME')}</Label>
        <div className="col-sm-10">
          <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" type="text" placeholder={t('USER.FIRST_NAME')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('USER.LAST_NAME')}</Label>
        <div className="col-sm-10">
          <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" type="text" placeholder={t('USER.LAST_NAME')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('EMAIL')}</Label>
        <div className="col-sm-10">
          <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" type="email" placeholder={t('EMAIL')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('PASSWORD')}</Label>
        <div className="col-sm-10">
          <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" placeholder={t('PASSWORD')} />
        </div>
      </div>
      <div className="form-group row">
        <Label type="required">{t('RE_PASSWORD')}</Label>
        <div className="col-sm-10">
          <input value={rePassword} onChange={e => setRePassword(e.target.value)} className="form-control" type="password" placeholder={t('RE_PASSWORD')} />
        </div>
      </div>
      <div className="offset-sm-2 form-check mb-3">
        <div className="mx-1">
          <input checked={newsletter} onChange={e => setNewsletter(e.target.checked)} className="form-check-input" id="registerNews" type="checkbox" />
          <label className="form-check-label" htmlFor="registerNews">{t('FORM.REGISTER_NEWS')}</label>
        </div>
      </div>
      <div className="offset-sm-2">
        <Link className="mx-1" to={ROUTES.PASSWORD_FORGET}>{t('FORGOT_PASSWORD')}</Link>
      </div>
      <div className="offset-sm-2 d-flex">
        <ButtonSubmit disabled={isInvalid} type="submit">{t('REGISTER')}</ButtonSubmit>
        <ButtonGoBack>{t('GO_BACK')}</ButtonGoBack>
      </div>
    </form>
  )
}

export default withRouter(FormRegister);
