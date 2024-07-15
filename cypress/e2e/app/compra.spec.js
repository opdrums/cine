import webBasePage from "../../pages/webBasePage";

const mobil = new webBasePage

describe('es una prueba a cinemark mobil',()=>{

    let date;

    beforeEach(function(){
        cy.fixture('credential').then(dateFixture =>{
            date= dateFixture;
            mobil.openMobil("samsung-s10", 360, 760)
            mobil.openUrl(date.baseUrl)
            mobil.clickElementByGet(".ant-modal-close-x")
            mobil.visibleElmPage(".primary-nav-bar__logo")
            mobil.simulateLocation(4.687955826896409, -74.10092888765324)
        })
    })

    it('end to end compra de una funcion de cine', () => {
        //login
        mobil.clickElementByGet(':nth-child(1) > div > .ant-btn')
        mobil.fillTextField("#MemberEmail",date.email)
        mobil.fillTextField("#MemberPassword", date.password)
        mobil.clickElementByGet(".text-center > .ant-btn")

        // Seleccionar horario de función
        mobil.validateElementLength(".jsx-1960175725", 1)
        mobil.clickElementXpathEq("//*[@id='__next']/div[2]/div[3]/section/div[1]/div/div/div/div/div[1]/div/div", 'button', date.selectFilm)
        cy.wait(date.time)
        mobil.clickElementByGet(".theaters-detail__container > :nth-child(1)")
        mobil.containsExistClick("Confirmar")
               
        // Seleccionar cantidad de sillas
        cy.wait(date.time)
        mobil.dismissAlertIfPresent('.jsx-258256937')
        mobil.clickElementByGet(':nth-child(2) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered')
        mobil.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', date.selectCountChair)
        mobil.clickElementByGet('.jsx-1369409061 > .ant-btn')
        
        //Seleciona la posicion de la silla
        mobil.containsExistClick(date.selectChairMobil)
        mobil.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        mobil.clickElementByGet('.d-flex > .primary')

        //seleccionar la comida
        cy.wait(date.time)
        mobil.clickMultipleElements("//div/div/div[3]/div/div[3]/div[2]/div/div/div[2]/button[2]/span/img")
        mobil.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        mobil.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        
        //formulario de registro
        mobil.fillTextField("#payment_name", date.name)
        mobil.fillTextField("#payment_lastName", date.latsName)
        mobil.fillTextField("#payment_dniNumber", date.numberIdentification)
        mobil.fillTextField("#payment_address", date.address)
        mobil.fillTextField("#payment_contactPhone", date.phone)
        mobil.fillTextField("#payment_emailAddress", date.email)

        // Formulario de registro tarjeta de crédito
        mobil.clickElementByGet(':nth-child(1) > .ant-collapse-header > .jsx-1565749887')
        mobil.fillTextFieldByXPath('//*[@id="payment_creditCard.number"]', date.numberTc)
        mobil.fillTextFieldByXPath('//*[@id="payment_creditCard.name"]', date.nameTc)
        mobil.fillTextFieldByXPath('//*[@id="payment_creditCard.securityCode"]', date.cvv) 
        mobil.clickElementByXPath('//*[@id="payment_creditCard.installments"]/div/div')
        mobil.clickElementListEq('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 2)
        mobil.clickCheckBox()
        mobil.clickElementByGet('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        mobil.containsExistClick("aceptar")

        //validar el QR   
        cy.wait(date.timeException)
        mobil.validateElmExist('.container-information__block > .text-center', {setTimeout: 20000})
        mobil.screenshot()
        mobil.containsExistClick("Finalizar")
        cy.clearCookies();
    });
})