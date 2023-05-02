import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from '../initArticlesPage/initArticlesPage';

describe('initArticlesPage.test', () => {
  test('actions called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test('actions not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    await thunk.callThunk({} as URLSearchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
