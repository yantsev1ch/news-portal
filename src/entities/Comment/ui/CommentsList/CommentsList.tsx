import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import cls from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentsList, {}, [className])}>
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentsList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard className={cls.comment} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});
