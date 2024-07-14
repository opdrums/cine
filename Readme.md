pasos para instalar y configurar:

1: crear un carpeta donde va tu proyecto
2: comando npm init --inicializar el proyecto
3: npm install cypress --save-dev
4: npx cypress open -- abrir crypress y configurar
5: npm install -D cypress-xpath   
6: configurar el proyecto en git hub

librerias externas:
* si quieres crear el comando xpath https://www.npmjs.com/package/cypress-xpath
* npm install --save-dev mochawesome


pasos para correr el proyecto:

* requiere correr desde cypress terminal: 
    npx cypress open
    elejir el navegador
    elejir el test

* requiere correr desde consola usando la key
    ingresar https://cloud.cypress.io/profile --hacer login
    https://cloud.cypress.io/invitation/be51922e-fec1-4c76-9e0c-165ddc85db2b --proyecto
    npx cypress run --record --key 07d06e25-3b04-4502-9e50-4e3215624ae6 --terminal

* requiere correr con mochawesome terminal
    cypress run --reporter mochawesome
    npx cypress run --reporter mochawesome --spec "ruta del test"

Anotaciones adicionales:

* tener presente la variable selectChair la cual es la que selecciona a posicion de la sillas
* tener presente las validaciones de que la silla fue seleccionada o desactivada puede reventar la app se recomiendar cambiar de forma manual la posicion de la silla
* Tener presente la carpeta evidence el cual se sube las evidencias
