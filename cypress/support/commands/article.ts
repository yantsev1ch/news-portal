import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
  views: 5204,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const sortArticles = (sortBy: string, order: string) => {
  cy.getByTestId('ArticlesPage.SortSelect').select(sortBy);
  cy.getByTestId('ArticlesPage.OrderSelect').select(order);
};

export const findArticle = (value: string) => {
  cy.getByTestId('ArticlesPage.Search').type(value);
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'asdasd' },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asdasd' },
  });

declare global {
  namespace Cypress {
    interface Chainable {
      sortArticles(sortBy: string, order: string): Chainable<void>;

      findArticle(value: string): Chainable<void>;

      createArticle(article?: Article): Chainable<Article>;

      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
