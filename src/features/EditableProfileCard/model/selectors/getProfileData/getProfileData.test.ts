import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          lastname: 'admin',
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({
      lastname: 'admin',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
