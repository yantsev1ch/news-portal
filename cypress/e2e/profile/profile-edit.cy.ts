let profileId = '';
describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('и данные успешно загружаются', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
  });
  it('и редактирует его', () => {
    const newFirstname = 'new-firstname';
    const newLastname = 'new-lastname';
    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
