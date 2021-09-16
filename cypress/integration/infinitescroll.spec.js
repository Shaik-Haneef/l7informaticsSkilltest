/// <reference types="Cypress" />
import InfiniteScrollPage from "../support/PageObjects/InfiniteScrollPage"
const infiniteScrollPage = new InfiniteScrollPage();

describe("Validate heroku app - infinite scroll functionality",function(){

    it("should verify scroll to bottom and assert pressence of new elements to html document", () => {
        //to navigate to url
        cy.visit(Cypress.env("url")+"infinite_scroll")
        //scroll to the bottom of the page
        infiniteScrollPage.ScrollToBottomAction()
        //to check addition of new sub div elements
        infiniteScrollPage.AssertNewSubDivAddition()
         //scroll to the bottom of the page
         infiniteScrollPage.ScrollToBottomAction()
         //to check addition of new sub div elements
         infiniteScrollPage.AssertNewSubDivAddition()
          //scroll to the bottom of the page
        infiniteScrollPage.ScrollToBottomAction()
        //to check addition of new sub div elements
        infiniteScrollPage.AssertNewSubDivAddition()
    })
})