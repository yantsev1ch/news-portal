import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';

const profileData: Profile = {
  username: 'admin',
  age: 30,
  lastname: 'Yantsevich',
  first: 'Andrey',
  city: 'Minsk',
  country: Country.Belarus,
  currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('without first, lastname and username', async () => {
    const result = validateProfileData({
      ...profileData, first: '', lastname: '', username: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({
      ...profileData, age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('no data', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
});
