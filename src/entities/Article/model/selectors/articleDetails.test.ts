import { StateSchema } from '@/app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './articleDetails';

describe('getProfileData', () => {
  // data
  test('should return article details data', () => {
    const data = {
      id: '1',
      title: 'title',
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  // isLoading
  test('should return article details isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  // error
  test('should return article details error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
