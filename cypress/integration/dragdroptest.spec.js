/// <reference types="Cypress" />
/// <reference types="@4tw/cypress-drag-drop" />
import '@4tw/cypress-drag-drop'
import DragDropPage from "../support/PageObjects/DragDropPage"
const dragDropPage = new DragDropPage();


describe("Validate heroku app - drag and drop functionality",function(){
  //this test is implemented by installing the following plugin @4tw/cypress-drag-drop
  //install package by using the following command npm install @4tw/cypress-drag-drop
  it("Should verify Drag and Drop functionality",()=>{
    const textA = 'A'
    const textB = 'B'    
    //To navigate to the url   
    cy.visit(Cypress.env("url")+"drag_and_drop")
    //To assert initial text availabe in container1
    dragDropPage.assertTextInContainer1(textA)
    //To assert initial text availabe in container2
    dragDropPage.assertTextInContainer2(textB)
    //To drag text availabe in container1 to container2
    dragDropPage.DragAtoB()
    //To assert final text availabe in container1
    dragDropPage.assertTextInContainer1(textB)
    //To assert final text availabe in container2
    dragDropPage.assertTextInContainer2(textA)  
  })
})
