class DragDropPage
{
    constructor(){
        this.waitTimeout = 60000
        this.containerA = '#column-a'
        this.containerB = '#column-b'
    }
    //getting locator of container A
    GetcontainerA() {
        return cy.get(this.containerA,{timeout:this.waitTimeout})
    }


    //getting locator of container B
    GetcontainerB() {
        return cy.get(this.containerB,{timeout:this.waitTimeout})
    }

    /** 
     * This method is to validate text available in container 1
     * @param text text that should be available in container1
    */
    assertTextInContainer1(text){
        this.GetcontainerA().should("contain",text)
    }

    /** 
     * This method is to validate text available in container 2
     * @param text text that should be available in container 2
    */
    assertTextInContainer2(text){
        this.GetcontainerB().should("contain",text)
    }

    //to drag contents in containerA and drop on containerB
    DragAtoB(){
        this.GetcontainerA().drag(this.containerB)
    }
}export default DragDropPage