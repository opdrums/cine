import webBasePage from "../../pages/webBasePage";

const web = new webBasePage

describe('es una prueba a cinemark',()=>{

    let date;

    beforeEach(function(){
        cy.fixture('login').then(dateFixture =>{
            date= dateFixture;
            web.openUrl(date.baseUrl)
            web.elementVisibleClick(".ant-modal-close-x")
            web.existElmPage(".primary-nav-bar__logo")
            web.simulateLocation()
        })

    })

    it('login user', () => {
        //login
        web.containsExistClick("INICIAR SESIÓN")
        web.fielText("#MemberEmail",date.email)
        web.fielText("#MemberPassword", date.password)
        web.elementVisibleClick(".text-center > .ant-btn")

        //selecciona el horario de la funcion
        web.valedatelenghtelm(".jsx-1960175725", 1)
        web.clickELemEq("//*[@id='__next']/div[2]/div[3]/section/div[1]/div/div/div/div/div[1]/div/div", 'button', 0)
        web.containsExistClick("21:25")
        web.containsExistClick("Confirmar")

        //selecciona la cantidad de sillas
        web.waitExplicity()
        web.windowInterviewALert('.jsx-258256937')
        web.elementVisibleClick(':nth-child(2) > :nth-child(3) > .jsx-3706725137 > .select-seat-format > .ant-select-selection > .ant-select-selection__rendered')
        web.selectElemList('.ant-select-dropdown-menu > :not(.ant-select-dropdown-menu-item-disabled)', 2)
        web.elementVisibleClick('.jsx-1369409061 > .ant-btn')
        
        //Seleciona la silla
        web.containsExistClick('F13')
        web.containsExistClick('F12')
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.elementVisibleClick('.d-flex > .primary')

        //selecciona la comida
        web.waitExplicity()
        web.elementVisibleClick('#Crispeta > .concessions-block__container > .concessions-block__list > :nth-child(1) > .candy-store__item > .candy-store__content > .candy-store__info > :nth-child(1) > .candy-store__actions > .candy-store-controls > .candy-store__btn-control--left-space')
        web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
        web.elementVisibleClick("#__next > div:nth-child(2) > div.jsx-1369409061.bottom-bar > div.jsx-1369409061.shopping-cart > div.jsx-1369409061.shopping-cart__price > div.sc-dPwPAC.jqOaw > button > svg")
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
        //web.clickInvokeXpatch('//*[@id="payment_creditCard.isSaveCard"]')
        web.elementVisibleClick('#payment_agreement')
        //web.elementVisibleClick('.bottom-bar__controls > :nth-child(2) > .ant-btn')
    });
})