import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

function AboutPage({ className }: AboutPageProps) {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about')}
    </div>
  );
}

export default AboutPage;
