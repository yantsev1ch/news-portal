import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        fullWidth
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        fullWidth
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('Произошла ошибка')}
          text={t('Попробуйте перезагрузить страницу')}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      fullWidth
      gap="16"
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && <Avatar src={data?.avatar} size={150} />}
      <Input
        onChange={onChangeFirstname}
        className={cls.input}
        value={data?.first}
        placeholder={t('Ваше имя')}
        readonly={readonly}
        data-testid="ProfileCard.Firstname"
      />
      <Input
        onChange={onChangeLastname}
        className={cls.input}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        readonly={readonly}
        data-testid="ProfileCard.Lastname"
      />
      <Input
        onChange={onChangeAge}
        className={cls.input}
        value={data?.age}
        type="number"
        placeholder={t('Ваш возраст')}
        readonly={readonly}
      />
      <Input
        onChange={onChangeCity}
        className={cls.input}
        value={data?.city}
        placeholder={t('Ваш город')}
        readonly={readonly}
      />
      <Input
        onChange={onChangeUsername}
        className={cls.input}
        value={data?.username}
        placeholder={t('Ваше имя пользователя')}
        readonly={readonly}
      />
      <Input
        onChange={onChangeAvatar}
        className={cls.input}
        value={data?.avatar}
        placeholder={t('Ссылка на аватар')}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        className={cls.input}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        className={cls.input}
      />
    </VStack>
  );
};
