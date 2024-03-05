import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { Drawer } from '@/shared/ui/Drawer';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isArticlesPageWasOpened } = useJsonSettings();

  const onClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const text = (
    <Text
      title={t('Добро пожаловать на страницу статей')}
      text={t(
        'Здесь вы можете искать и просматривать статьи на различные темы',
      )}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
