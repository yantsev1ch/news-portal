describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });
  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('и статьи успешно подгружаются на стабах(фикстурах)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
  it('и статьи успешно сортируются по названию и возрастанию', () => {
    cy.sortArticles('title', 'asc');
    cy.getByTestId('ArticlesPage.SortSelect').should('have.value', 'title');
    cy.getByTestId('ArticlesPage.OrderSelect').should('have.value', 'asc');
  });
  it('и статьи успешно сортируются по количеству просмотров и убыванию', () => {
    cy.sortArticles('views', 'desc');
    cy.getByTestId('ArticlesPage.SortSelect').should('have.value', 'views');
    cy.getByTestId('ArticlesPage.OrderSelect').should('have.value', 'desc');
  });
  it('и ищет нужную ему статью', () => {
    cy.findArticle('Kotlin');
    cy.getByTestId('ArticlesPage.Search').should('have.value', 'Kotlin');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });
  it.skip('сломанный тест который скипается', () => {
    cy.get('error').should('exist');
  });
});
