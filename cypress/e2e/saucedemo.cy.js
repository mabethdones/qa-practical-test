describe('SauceDemo Flow', () => {

  it('should complete purchase', () => {

    cy.visit('https://www.saucedemo.com/')

    // login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')

    let products = []

    cy.get('.inventory_item').each(($el, index) => {
      const priceText = $el.find('.inventory_item_price').text()
      const price = Number(priceText.replace('$', ''))

      products.push({ index, price })
    }).then(() => {

      products.sort((a, b) => a.price - b.price)

      const cheapest = products[0].index
      const expensive = products[products.length - 1].index

      cy.get('.inventory_item').eq(cheapest).contains('Add to cart').click()
      cy.get('.inventory_item').eq(expensive).contains('Add to cart').click()
    })

    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 2)

    cy.get('#checkout').click()

    cy.get('#first-name').type('Jyeohan')
    cy.get('#last-name').type('Dela Cruz')
    cy.get('#postal-code').type('1550')

    cy.get('#continue').click()
    cy.get('#finish').click()

    cy.contains('Thank you for your order!').should('be.visible')

    // logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })
})