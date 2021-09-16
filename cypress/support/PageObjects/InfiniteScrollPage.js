class InfiniteScrollPage
{
    //To get sub div elements locator
    Getsubdiv() {
        return cy.get('div.jscroll-added')
    }
    //To scroll to the bottom of the window
    ScrollToBottomAction(){
        cy.scrollTo('bottom',{duration:2000})
    }
    //To assert if new sub div elements added or not
    AssertNewSubDivAddition(){
        this.Getsubdiv().its('length').then((count)=>{
            this.ScrollToBottomAction()
            this.Getsubdiv().its('length').should('be.gt',count)
        })
    }
}export default InfiniteScrollPage