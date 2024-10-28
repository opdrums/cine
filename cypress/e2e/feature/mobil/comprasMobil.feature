Feature: Como automatizador quiero hacer una compra en cine

  Background:
    Given ingreso mobil a la url "https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/"

  Scenario Outline: Comprar en Cinemark web
    Given ingreso las credenciales en mobil "<email>" y "<password>"
    When Seleccionar horario de función "<selectFilm>"
    When Seleccionar cantidad "<selectCountChair>" y posicion de la silla "<selectChairWeb>" y comida
    And formulario de registro "<name>", "<latsName>", "<numberIdentification>", "<address>", "<phone>", "<userEmail>"
    And formulario de registro tarjeta de credito "<numberTc>", "<nameTc>", "<cvv>"
    Then validar la compra con un QR generado
    
    Examples:
      | email | password | selectFilm | selectCountChair |selectChairWeb | name | latsName | numberIdentification | address | phone | userEmail | numberTc | nameTc | cvv |
      | automationtestbc@yopmail.com| Colombia2024# | 0 | 1 | c21 | testing qa | cinemark | 109775544 | Cl. 130d Bis #99-99 a 99-1 | 3457895509 | automationtestbc@yopmail.com | 377813000000001 | test | 7777 |