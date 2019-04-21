// https://docs.cypress.io/api/introduction/api.html

describe('Home Tab', () => {
  context('iPhone 6/7/8 Plus', () => {
    beforeEach(() => {
      cy.viewport(414, 736);
      cy.visit('/home');
    });
    it('screenshot', () => {
      cy.document().hideScrollBar();
      cy.screenshot('Home-iPhonePlus', {
        capture: 'viewport',
      });
    });
  });
});
