/// <reference types="cypress" />

const payloadChangeBook = require('../Payload/change-book.json')

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'content-type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })    
}

export { changeBook };