import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';
import {
  articleDetailsRecommendationsReducer,
} from '../../model/slice/articleDetailsRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsRecommendationsReducer,
});
