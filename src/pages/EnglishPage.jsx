import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function EnglishPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }, []);

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
