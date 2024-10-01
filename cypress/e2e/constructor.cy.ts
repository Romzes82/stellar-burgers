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

    cy.get('[data-cy=constructor-bun-top]').should(
      'contain',
      'Краторная булка N-200i'
    );
    cy.get('[data-cy=constructor-bun-bottom]').should(
      'contain',
      'Краторная булка N-200i'
    );
  });

  it('should add ingredient', () => {
    cy.get('[data-cy=mains]').contains('Добавить').click();

    cy.get('[data-cy=mains-ingredients]').should(
      'contain',
      'Биокотлета из марсианской Магнолии'
    );
  });

  // открытие и закрытие модального окна
  it('should open/close modal', () => {
    cy.get('[data-cy=modal]').should('not.exist');
    cy.contains('Краторная булка N-200i').click();

    cy.get('[data-cy=modal]').should('be.visible');
    cy.get('[data-cy=modal-close]').click();
    cy.get('[data-cy=modal]').should('not.exist');
  });
});

// тестовое оформление заказа
describe('Cypress test order ', () => {
  beforeEach('Настройка перехвата запросов', () => {
    cy.viewport(1300, 800);
    cy.intercept('GET', 'api/ingredients', {
      fixture: 'ingredients.json'
    });
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as(
      'postOrder'
    );

    // подставляем моковые токены, чтоб не атворизоваться каждый раз
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    );

    cy.setCookie('accessToken', 'test-accessToken');
    cy.visit('http://localhost:4000');
  });

  afterEach(() => {});

  it('shoud order burger done', () => {
    cy.get('[data-cy=buns]').contains('Добавить').click();
    cy.get('[data-cy=mains]').contains('Добавить').click();
    cy.get('[data-cy=sauces]').contains('Добавить').click();

    cy.get('[data-cy=order]').click();
    cy.get('[data-cy=order-number]').should('be.visible');
    cy.get('[data-cy=order-id]').should('be.visible');
    cy.get('[data-cy=modal-close]').click();

    // проверим, что отправлено в запросе
    cy.wait('@postOrder')
      .its('request.body')
      .should('deep.equal', {
        ingredients: [
          '643d69a5c3f7b9001cfa0941',
          '643d69a5c3f7b9001cfa0942',
          '643d69a5c3f7b9001cfa093c'
        ]
      });
  });
});
