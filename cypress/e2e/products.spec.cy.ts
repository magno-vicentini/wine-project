describe('Page /', () => {
  beforeEach(() => {
    cy.clearLocalStorage()

    cy.visit('http://localhost:3000/')

  })
  it('Add products with no filter in pages', () => {
    cy.get('[data-test="button_add_product_1"]', <any>{setTimeout: 5000}).click().click()

    cy.get('[data-test="button_add_product_5"]').click().click()

    cy.get('[data-test="button_add_product_8"]').click().click()

    cy.get('[data-test="button_change_page_3"]').click()

  })

  it('Add products with filter', () => {

    cy.get('[data-test="icon_filter_name"]', <any>{setTimeout: 5000}).click()

    cy.get('[data-test="input_filter_name"]').type('Co')

    cy.get('[data-test="button_add_product_4"]' , <any>{setTimeout: 5000}).click().click()

    cy.get('[data-test="button_add_product_1"]').click().click()

    cy.get('[data-test="select_filter_100-200"]').click()

    cy.contains('32 produtos encontrados', <any>{setTimeout: 5000})

    cy.get('[data-test="button_add_product_2"]', <any>{setTimeout: 5000}).click().click()

    cy.get('[data-test="button_add_product_6"]', <any>{setTimeout: 5000}).click().click()

  })

  it('Add specific product in own page', () => {

    cy.get('[data-test="product_1"]', <any>{setTimeout: 5000}).click()

    cy.url().should('include', '/product/1')
    
    cy.contains('h1', 'Colección De Familia La Mateo D.O.Ca. Rioja 2017', <any>{setTimeout: 5000})

    cy.get('[data-test="button_add_quantity"]', <any>{setTimeout: 5000}).click().click()

    cy.get('[data-test="button_add_product"]', <any>{setTimeout: 5000}).click()

  })

  it('Add products and remove on cart', () => {
    cy.get('[data-test="button_add_product_1"]', <any>{setTimeout: 5000}).click().click()

    cy.get('[data-test="button_add_product_5"]').click().click()

    cy.get('[data-test="button_add_product_8"]').click().click()

    cy.get('[data-test="button_cart"]').click()

    cy.url().should('include', '/cart')

    cy.get( '[data-test="button_remove_product_5"]').click()

    cy.get( '[data-test="button_remove_product_8"]').click()

    cy.get( '[data-test="quantity_cart"]').contains(2)
  })
})