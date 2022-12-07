describe('Форма логин/пароль СТАЯ', function () {
    it('Правильный логин/пароль', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('login');
         cy.get('.auth-form > form > [type="password"]').type('pass');
         cy.get('.auth-form__submit > .s-button__content').click();
         cy.contains('Мои заказы');
     })
 })