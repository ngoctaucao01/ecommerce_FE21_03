import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumb = () => {
  const { t } = useTranslation();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">{t('HOMEPAGE')}</Link></li>
        <li className="breadcrumb-item active" aria-current="page">{t('INTRODUCE')}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
