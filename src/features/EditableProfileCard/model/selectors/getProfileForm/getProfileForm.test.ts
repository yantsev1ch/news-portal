import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return profile form data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          lastname: 'admin',
        },
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual({
      lastname: 'admin',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
