import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './model/slice/articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './model/slice/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from './model/types';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsPageSchema } from './model/types';
