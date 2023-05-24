import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => (
  <Page className={classNames('', {}, [className])}>
    <VStack fullWidth gap="16">
      <EditableProfileCard />
    </VStack>
  </Page>
));

export default ProfilePage;
