import React from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
    className?: string;
}

function MainPage({ className }: MainPageProps) {
  const { t } = useTranslation();

  return (
    <div>
      {t('main')}
    </div>
  );
}

export default MainPage;
