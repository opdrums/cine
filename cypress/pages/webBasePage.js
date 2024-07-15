class webBasePage {

    openUrl(url){
        cy.visit(url)
    }

    openMobil(mobil, alto , ancho){
        cy.viewport(mobil) 
        cy.viewport(alto, ancho)
    }

    fillTextField(elm, text){
        cy.get(elm)
        .clear()
        .type(text)
    }
    
    fillTextFieldByXPath(elm, text){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .type(text)
    }
    
    clickElementByXPath(elm){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .click()
    }

    screenshot(){
        cy.screenshot()
    }

    clickElementByGet(elm){
        cy.get(elm)
        .should('be.visible')
        .click()
    }

    clickElementListEq(elm, indice){
        cy.get(elm)
        .eq(indice)
        .click({force:true})

    }

    clickElementXpathEq(elm,elmAditional, number){
        cy.xpath(elm).find(elmAditional)
        .eq(number).should('be.visible')
        .click({force:true})
    }

    clickMultipleElements(elm){
        cy.xpath(elm)
        .click({multiple:true})
    }

    visibleElmPage(elm){
        cy.get(elm)
        .should('be.visible')
        .click()
    }

    containsExistClick(elm){
        cy.contains(elm.toUpperCase())
        .should('be.visible')
        .click()
    }

    clickCheckBox(){
        cy.get('[type="checkbox"]')
        .eq(1)
        .check({force:true})
    }


    containsHaveText(text){
        cy.contains(text)
        .should('have.text', text)
    }

    validateElementLength(elm, numberList){
        cy.get(elm)
        .should("have.length", numberList)
        .wait(2000)
    }

    dismissAlertIfPresent(elm){
        cy.get(elm).should('be.visible')
        cy.get('body').type('{esc}');
        cy.get(elm).should('not.be.visible');
    }

    validateElmExist(elm){
        cy.get(elm).should('exist')
    }

    simulateLocation(lat, long){
        cy.window().then(win => {
            win.navigator.geolocation.getCurrentPosition = (successCallback, errorCallback, options) => {
              const position = { coords: { latitude: lat, longitude: long} };
              successCallback(position);
            };
          });
    }
}

export default webBasePage