import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <RatingCard
        title={t('Как вам статья?')}
        feedbackTitle={t('Оставьте отзыв о статье')}
        hasFeedback
      />
    </Page>
  );
});

export default MainPage;
