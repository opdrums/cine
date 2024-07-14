class webBasePage {

    openUrl(url){
        cy.visit(url)
    }

    fielText(elm, text){
        cy.get(elm)
        .clear()
        .type(text)
    }
    
    fielTextXpatch(elm, text){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .type(text)
    }

    clickInvokeXpatch(elm){
        cy.xpath(elm)
        .invoke('removeClass', 'clase-oculto')
        .should('be.visible')
        .click()
    }

    screenshot(){
        cy.screenshot()
    }

    elementVisibleClick(elm){
        cy.get(elm)
        .should('be.visible')
        .click()
    }

    selectElemList(elm, indice){
        cy.get(elm)
        .eq(indice)
        .click({force:true})

    }

    clickELemEq(elm,elmAditional, number){
        cy.xpath(elm).find(elmAditional)
        .eq(number).should('be.visible')
        .click({force:true})
    }

    clickELementMultiplex(elm){
        cy.xpath(elm)
        //.should('be.visible')
        .click({multiple:true})
    }

    getElementExistClick(elm){
        cy.get(elm)
        .should('exist')
        .click()
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

    valedatelenghtelm(elm, numberList){
        cy.get(elm)
        .should("have.length", numberList)
        .wait(2000)
    }

    windowInterviewALert(elm){
        cy.get(elm).should('be.visible')
        cy.get('body').type('{esc}');
        cy.get(elm).should('not.be.visible');
    }

    elementExist(elm){
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