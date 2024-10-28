Feature: Como automatizador quiero hacer un login

    Background:
        Given ingreso a la url "https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/"

    Scenario Outline: Comprar en Cinemark web
        Given ingreso las credenciales "<email>" y "<password>"
    
    Examples:
    | email | password |
    | automationtestbc@yopmail.com| Colombia2024# |