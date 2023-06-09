import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormError, getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentForm', () => {
  // data
  test('should return comment text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'TEXT',
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('TEXT');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
  });

  // error
  test('should return article details error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
