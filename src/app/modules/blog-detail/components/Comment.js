import React from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { Label } from '../../shared/form/Label';
import { useTranslation } from 'react-i18next';

const BlogDetailComment = () => {
  const { t } = useTranslation();

  return (
    <Form className="blog-form">
      <h4>{t('COMMENT')}</h4>
      <FormGroup className="row">
        <Label type="required">{t('USER.FIRST_NAME')}</Label>
        <Col sm={10}>
          <Input type="text" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label type="required">{t('EMAIL')}</Label>
        <Col sm={10}>
          <Input type="email" />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label type="required">{t('COMMENT')}</Label>
        <Col sm={10}>
          <Input type="textarea" rows={8} defaultValue={""} />
        </Col>
      </FormGroup>
      <Col sm={{ size: 'auto', offset: 2 }}>
        <button className="btn btn-primary mx-1 text-uppercase" type="submit">{t('FORM.SUBMIT_COMMENT')}</button>
      </Col>
    </Form>
  )
}

export default BlogDetailComment;
