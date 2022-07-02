describe('Navigation', () => {
  it('should navigate to the product with id 1 add 2 products to cart and go to cart', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('[data-test="product_1"]', <any>{setTimeout: 5000}).click()

    // The new url should include "/about"
    cy.url().should('include', '/product/1')

    // The new page should contain an h1 with "About page"
    
    cy.contains('h1', 'Colección De Familia La Mateo D.O.Ca. Rioja 2017', <any>{setTimeout: 5000})

    cy.contains('button', '+').click()
    cy.contains('button', '+').click()

    cy.contains('button', 'ADICIONAR').click()

    cy.get('[data-test="button_cart"]').click()

    cy.url().should('include', '/cart')
  })
})