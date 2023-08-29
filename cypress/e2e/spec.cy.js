const url = `index.html`;

describe('Restaurant Menu Tests', () => {

  beforeEach(() => {
    cy.visit(url);
  });

  context('Desktop view', () => {

    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('Should render menu items correctly', () => {
      cy.get('.menu-item').should('have.length.gte', 1);
    });

    it('Should render navbar with all navigation links and search input', () => {
      cy.get('.navbar').should('be.visible');
      cy.get('.nav-link').should('have.length.gte', 5);
      cy.get('#search-input').should('be.visible');
    });

    it('Should filter menu items by category when filter buttons are clicked', () => {
      cy.get('.nav-link[data-filter="starters"]').click();
      cy.get('.menu-item .card-text > .text-muted').each(($el) => {
        expect($el.text()).to.include('Category: starters');
      });
    });

    it('Should render an image within the card', () => {
      cy.get('.menu-item .card img.card-img-top').should('be.visible');
    });
    
    it('Should filter menu items based on search input', () => {
      cy.get('#search-input').type('apple');
      cy.get('.menu-item .card-title').each(($el) => {
        expect($el.text().toLowerCase()).to.include('apple');
      });
    });

    it('Should have Bootstrap classes', () => {
      cy.get('.navbar').should('have.class', 'navbar');
      cy.get('.nav-link').should('have.class', 'nav-link');
    });

  });

  context('Mobile view', () => {

    beforeEach(() => {
      cy.viewport(375, 667);
    });

    it('Should render menu items correctly', () => {
      cy.get('.menu-item').should('have.length.gte', 1);
    });

    it('Should show navbar toggler and hide navigation links and search input by default', () => {
      cy.get('.navbar-toggler').should('be.visible');
      cy.get('.nav-link').should('not.be.visible');
      cy.get('#search-input').should('not.be.visible');
    });

    it('Should display navigation links and search input when navbar toggler is clicked', () => {
      cy.get('.navbar-toggler').click();
      cy.get('.nav-link').should('be.visible');
      cy.get('#search-input').should('be.visible');
    });

  });
  it('Should be using Bootstrap', () => {
    // Check for Bootstrap CSS
    cy.get('link[rel="stylesheet"]').should('have.attr', 'href').and('match', /bootstrap.*\.css/);
  
    
  });
  

});
