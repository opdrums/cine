import webBasePage from "../../pages/webBasePage";

const web = new webBasePage

describe('es una prueba a cinemark web',()=>{

    let date;
    let selectChair = "q23"
    let time = 5000

    beforeEach(function(){
        cy.fixture('login').then(dateFixture =>{
            date= dateFixture;
            web.openUrl(date.baseUrl)
            web.elementVisibleClick(".ant-modal-close-x")
            web.visibleElmPage(".primary-nav-bar__logo")
            web.simulateLocation(4.687955826896409, -74.10092888765324)
        })

    })

    it('end to end compra de una funcion de cine', () => {
        //login
        web.containsExistClick("INICIAR SESIÓN")
        web.fielText("#MemberEmail",date.email)
        web.fielText("#MemberPassword", date.password)
        web.elementVisibleClick(".text-center > .ant-btn")

        //selecciona el horario de la funcion
        web.valedatelenghtelm(".jsx-1960175725", 1)
        web.clickELemEq("//*[@id='__next']/div[2]/div[3]/section/div[1]/div/div/div/div/div[1]/div/div", 'button', 0)
        cy.wait(time)
        web.elementVisibleClick(".theaters-detail__container > :nth-child(1)")
        web.containsExistClick("Confirmar")
               
        //selecciona la cantidad de sillas
        cy.wait(time)
        web.windowInterviewALert('.jsx-258256937')
        web.elementVisibleClick(':nth-child(2) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered')
        web.selectElemList('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 1)
        web.elementVisibleClick('.jsx-1369409061 > .ant-btn')
        
        //Seleciona la silla
        web.containsExistClick(selectChair)
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.elementVisibleClick('.d-flex > .primary')

        //selecciona la comida
        cy.wait(time)
        web.clickELementMultiplex("//div/div/div[3]/div/div[3]/div[2]/div/div/div[2]/button[2]/span/img")
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        
        //formulario de registro
        web.fielText("#payment_name", date.name)
        web.fielText("#payment_lastName", date.latsName)
        web.fielText("#payment_dniNumber", date.numberIdentification)
        web.fielText("#payment_address", date.address)
        web.fielText("#payment_contactPhone", date.phone)
        web.fielText("#payment_emailAddress", date.email)

        //formulario de registro tc
        web.elementVisibleClick(':nth-child(1) > .ant-collapse-header > .jsx-1565749887')
        web.fielTextXpatch('//*[@id="payment_creditCard.number"]', date.numberTc)
        web.fielTextXpatch('//*[@id="payment_creditCard.name"]', date.nameTc)
        web.fielTextXpatch('//*[@id="payment_creditCard.securityCode"]', date.cvv) 
        web.clickInvokeXpatch('//*[@id="payment_creditCard.installments"]/div/div')
        web.selectElemList('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 2)
        web.clickCheckBox()
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.containsExistClick("aceptar")

        //validar el qr   
        cy.wait(70000)
        web.elementExist('.container-information__block > .text-center', {setTimeout: 20000})
        web.screenshot()
        web.containsExistClick("Finalizar")
        cy.clearCookies();
    });
})