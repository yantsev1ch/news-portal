import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { LoginSchema } from '@/features/AuthByUsername';
import { UserSchema } from '@/entities/User';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollRestoreSchema } from '@/features/ScrollRestore';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
  user: UserSchema;
  scrollRestore: ScrollRestoreSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
