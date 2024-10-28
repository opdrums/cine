import webBasePage from "../../../pages/webBasePage";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const web = new webBasePage();

Given('ingreso a la url {string}', (url) => {
    web.openUrl(url);
    web.clickElementByGet(".ant-modal-close-x");
    web.visibleElmPage(".primary-nav-bar__logo");
    web.simulateLocation(4.687955826896409, -74.10092888765324);
});

Given('ingreso mobil a la url {string}', (url) => {
    web.openMobil("samsung-s10", 360, 760)
    web.openUrl(url);
    web.clickElementByGet(".ant-modal-close-x");
    web.visibleElmPage(".primary-nav-bar__logo");
    web.simulateLocation(4.687955826896409, -74.10092888765324);
});

Given('ingreso las credenciales {string} y {string}', (emailUser, password) => {
    web.clickElementByGet(".secondary-nav_btn_register > :nth-child(2) > .jsx-2733391715 > .ant-btn")
    web.fillTextField("#MemberEmail", emailUser);
    web.fillTextField("#MemberPassword", password);
    web.clickElementByGet(".text-center > .ant-btn");
});

Given('ingreso las credenciales en mobil {string} y {string}', (emailUser, password) => {
    web.clickElementByGet(':nth-child(1) > div > .ant-btn')
    web.fillTextField("#MemberEmail", emailUser);
    web.fillTextField("#MemberPassword", password);
    web.clickElementByGet(".text-center > .ant-btn");
});
