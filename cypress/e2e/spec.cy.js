const url = `index.html`;

describe('Restaurant Menu Tests Desktop view', () => {

  beforeEach(() => {
    cy.visit(url);
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

  })
 
    
  describe('Restaurant Menu Tests medium view', () => {
    beforeEach(() => {
      cy.visit(url);
      cy.viewport(768, 1024); // Set viewport to typical medium screen size
    });
  
    it('Should render two menu items in a row', () => {
      cy.get('.menu-item').then(($items) => {
        expect($items).to.have.length.gte(2); // Ensure there are at least two items
        const firstItemRect = $items[0].getBoundingClientRect();
        const secondItemRect = $items[1].getBoundingClientRect();
        expect(firstItemRect.top).to.eq(secondItemRect.top); // Ensure the two items are on the same row
      });
    });
  
    // You can add more tests specific to medium view if needed
  
  })
  
  describe('Restaurant Menu Tests phone view', () => {

    beforeEach(() => {
      cy.visit(url);
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



  describe('Restaurant Menu Tests bootstrap integration', () => {

    beforeEach(() => {
      cy.visit(url);
    });

  it('Should be using Bootstrap ', () => {
    // Flag to check if Bootstrap CSS is found
    let isBootstrapFound = false;
    // Check each <link> element
    cy.get('link[rel="stylesheet"]').each(($el) => {
        const hrefValue = $el.attr('href');
        if (hrefValue.match(/bootstrap.*\.css/)) {
            isBootstrapFound = true;
        }
    }).then(() => {
        // Assert that Bootstrap CSS is found
        expect(isBootstrapFound).to.be.true;
    });


  

});

  })