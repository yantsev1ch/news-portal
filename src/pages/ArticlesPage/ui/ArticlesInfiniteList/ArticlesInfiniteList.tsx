import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticlesInfiniteListProps {
  className?: string;
}

export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  if (error) {
    return (
      <Text title={t('Ошибка при загрузке статей')} align={TextAlign.CENTER} />
    );
  }

  return (
    <ArticleList
      articles={articles}
      view={view}
      isLoading={isLoading}
      className={className}
    />
  );
});
