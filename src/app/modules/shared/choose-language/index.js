import React from 'react';
import { useTranslation } from "react-i18next";
import { toast } from 'react-toastify';
var classNames = require('classnames');

const ChooseLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  var btnClassVi = classNames({
    'badge-primary': i18n.language === 'vi',
  });
  var btnClassEn = classNames({
    'badge-primary': i18n.language === 'en',
  });

  const handleClick = (lang) => {
    (lang === "vi") ? changeLanguage("vi") : changeLanguage("en");
    toast.success(t('NOTIFY.CHOOSE_LANGUAGE_SUCCESS'));
  }

  return (
    <div className="d-flex float-right">
      <button className={`badge mx-2 ${btnClassVi}`} onClick={() => handleClick("vi")}>{t('LANG_VI')}</button>
      <button className={`badge mx-2 ${btnClassEn}`} onClick={() => handleClick("en")}>{t('LANG_EN')}</button>
    </div>
  )
}

export default ChooseLanguage;
