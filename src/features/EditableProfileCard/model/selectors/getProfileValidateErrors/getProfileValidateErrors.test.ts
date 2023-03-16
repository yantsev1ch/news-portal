import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'features/EditableProfileCard';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('should return profile validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.INCORRECT_USER_DATA],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
