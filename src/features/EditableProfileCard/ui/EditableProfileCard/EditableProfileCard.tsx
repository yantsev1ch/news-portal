import { ProfileCard } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
} from 'features/EditableProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';

interface EditableProfileCardProps {
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <ProfileCard
      data={formData}
      isLoading={isLoading}
      error={error}
      readonly={readonly}
      onChangeFirstname={onChangeFirstname}
      onChangeLastname={onChangeLastname}
      onChangeAge={onChangeAge}
      onChangeCity={onChangeCity}
      onChangeUsername={onChangeUsername}
      onChangeAvatar={onChangeAvatar}
      onChangeCurrency={onChangeCurrency}
      onChangeCountry={onChangeCountry}
    />
  );
};
