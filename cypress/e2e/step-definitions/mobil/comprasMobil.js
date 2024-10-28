import webBasePage from "../../../pages/webBasePage";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const web = new webBasePage();
let time = 7000

When('Seleccionar horario de función {string}', (selectFilm) => {
    web.validateElementLength(".jsx-1960175725", 1)
    web.clickElementXpathEq("//*[@id='__next']/div[2]/div[3]/section/div[1]/div/div/div/div/div[1]/div/div", 'button', selectFilm)
    cy.wait(time)
    web.clickElementByGet(".theaters-detail__container > :nth-child(1)")
    web.containsExistClick("Confirmar")
})

When('Seleccionar cantidad {string} y posicion de la silla {string} y comida', (selectCountChair, selectChairWeb) => {
    cy.wait(time)
    web.dismissAlertIfPresent('.jsx-258256937')
    web.clickElementByGet(':nth-child(2) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered')
    web.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', selectCountChair)
    web.clickElementByGet('.jsx-1369409061 > .ant-btn')

    web.containsExistClick(selectChairWeb)
    web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
    web.clickElementByGet('.d-flex > .primary')
    cy.wait(time)
    web.clickMultipleElements("//div/div/div[3]/div/div[3]/div[2]/div/div/div[2]/button[2]/span/img")
    web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
    web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
})

And('formulario de registro {string}, {string}, {string}, {string}, {string}, {string}', (name, latsName, numberIdentification,address, phone, userEmail) => {
    cy.wait(time)
    web.fillTextField("#payment_name", name)
    web.fillTextField("#payment_lastName", latsName)
    web.fillTextField("#payment_dniNumber", numberIdentification)
    web.fillTextField("#payment_address", address)
    web.fillTextField("#payment_contactPhone", phone)
    web.fillTextField("#payment_emailAddress", userEmail)
})

And('formulario de registro tarjeta de credito {string}, {string}, {string}', (numberTc, nameTc, cvv) => {
    cy.wait(time)
    web.clickElementByGet('.ant-col-10 > .jsx-1652500618')
    web.fillTextFieldByXPath('//*[@id="payment_creditCard.number"]', numberTc)
    web.fillTextFieldByXPath('//*[@id="payment_creditCard.name"]', nameTc)
    web.fillTextFieldByXPath('//*[@id="payment_creditCard.securityCode"]', cvv) 
    web.clickElementByXPath('//*[@id="payment_creditCard.installments"]/div/div')
    web.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 2)
    web.clickCheckBox()
    web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
    web.containsExistClick("aceptar")
})

Then('validar la comprar con un Qr generado', () => {
    cy.wait(date.timeException)
    web.validateElmExist('.container-information__block > .text-center', {setTimeout: 20000})
    web.screenshot()
    web.containsExistClick("Finalizar")
    cy.clearCookies();
})
