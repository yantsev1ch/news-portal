import { ArticleDetailsPageCommentsSchema, ArticleDetailsPageRecommendationsSchema } from 'pages/ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsPageCommentsSchema;
    recommendations: ArticleDetailsPageRecommendationsSchema;
}
