import {
  Profile, profileActions, profileReducer, ProfileSchema, updateProfileData, ValidateProfileError,
} from 'features/EditableProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const profileData: Profile = {
  username: 'admin',
  age: 30,
  lastname: 'Yantsevich',
  first: 'Andrey',
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: {
        username: '',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      validateError: undefined,
      readonly: true,
      data: profileData,
      form: profileData,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: '333',
    }))).toEqual({
      form: {
        username: '333',
      },
    });
  });

  test('test update profile services pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('test update profile services fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: undefined,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileData, ''))).toEqual({
      isLoading: false,
      readonly: true,
      validateError: undefined,
      data: profileData,
      form: profileData,
    });
  });
});
