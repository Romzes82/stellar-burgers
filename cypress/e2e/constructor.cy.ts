describe('Cypress test constructor', () => {
  beforeEach('Настройка перехвата запросов', () => {
    cy.viewport(1300, 800);
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
    // cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.visit('http://localhost:4000');
  });

  // добавление булки и начинки
  it('should add bun', () => {
    cy.get('[data-cy=buns]').contains('Добавить').click();

    cy.get('[data-cy=constructor-bun-top]').should('contain', 'Краторная булка N-200i');
    cy.get('[data-cy=constructor-bun-bottom]').should('contain', 'Краторная булка N-200i');
  });

  it('should add ingredient', () => {
    cy.get('[data-cy=mains]').contains('Добавить').click();

    cy.get('[data-cy=mains-ingredients]').should(
      'contain',
      'Биокотлета из марсианской Магнолии'
    );
  });
});
