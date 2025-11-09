import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function PersianPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('fa');
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
