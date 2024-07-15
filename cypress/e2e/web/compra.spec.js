import webBasePage from "../../pages/webBasePage";

const web = new webBasePage;

describe('es una prueba a cinemark web',()=>{

    let date;

    beforeEach(function(){
        cy.fixture('credential').then(dateFixture =>{
            date= dateFixture;
            web.openUrl(date.baseUrl)
            web.clickElementByGet(".ant-modal-close-x")
            web.visibleElmPage(".primary-nav-bar__logo")
            web.simulateLocation(4.687955826896409, -74.10092888765324)
        })
    })

    it('end to end compra de una funcion de cine', () => {
        //login
        web.containsExistClick("INICIAR SESIÓN")
        web.fillTextField("#MemberEmail",date.email)
        web.fillTextField("#MemberPassword", date.password)
        web.clickElementByGet(".text-center > .ant-btn")

        // Seleccionar horario de función
        web.validateElementLength(".jsx-1960175725", 1)
        web.clickElementXpathEq("//*[@id='__next']/div[2]/div[3]/section/div[1]/div/div/div/div/div[1]/div/div", 'button', 0)
        cy.wait(date.time)
        web.clickElementByGet(".theaters-detail__container > :nth-child(1)")
        web.containsExistClick("Confirmar")
               
        // Seleccionar cantidad de sillas
        cy.wait(date.time)
        web.dismissAlertIfPresent('.jsx-258256937')
        web.clickElementByGet(':nth-child(2) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered')
        web.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', date.selectCountChair)
        web.clickElementByGet('.jsx-1369409061 > .ant-btn')
        
        //Seleciona la posicion de la silla
        web.containsExistClick(date.selectChairWeb)
        web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.clickElementByGet('.d-flex > .primary')

        //seleccionar la comida
        cy.wait(date.time)
        web.clickMultipleElements("//div/div/div[3]/div/div[3]/div[2]/div/div/div[2]/button[2]/span/img")
        web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        
        //formulario de registro
        web.fillTextField("#payment_name", date.name)
        web.fillTextField("#payment_lastName", date.latsName)
        web.fillTextField("#payment_dniNumber", date.numberIdentification)
        web.fillTextField("#payment_address", date.address)
        web.fillTextField("#payment_contactPhone", date.phone)
        web.fillTextField("#payment_emailAddress", date.email)

        // Formulario de registro tarjeta de crédito
        web.clickElementByGet(':nth-child(1) > .ant-collapse-header > .jsx-1565749887')
        web.fillTextFieldByXPath('//*[@id="payment_creditCard.number"]', date.numberTc)
        web.fillTextFieldByXPath('//*[@id="payment_creditCard.name"]', date.nameTc)
        web.fillTextFieldByXPath('//*[@id="payment_creditCard.securityCode"]', date.cvv) 
        web.clickElementByXPath('//*[@id="payment_creditCard.installments"]/div/div')
        web.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 2)
        web.clickCheckBox()
        web.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.containsExistClick("aceptar")

        //validar el QR   
        cy.wait(date.timeException)
        web.validateElmExist('.container-information__block > .text-center', {setTimeout: 20000})
        web.screenshot()
        web.containsExistClick("Finalizar")
        cy.clearCookies();
    });
})