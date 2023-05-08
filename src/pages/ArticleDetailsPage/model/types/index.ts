import { ArticleDetailsPageCommentsSchema } from '../types/articleDetailsPageCommentsSchema';
import { ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsPageCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
