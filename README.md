# Pay Parking

In contextul unei parcari cu plata, care opereaza urmatoarele tarife (10 lei prima ora de
stationare, 5 lei fiecare ora ulterioara), cu capacitatea maxima de 10 locuri de parcare, avem
nevoie de un sistem de gestiune a activitatii. Stationarea se rotunjeste prin adaugare la cea mai
apropiata ora (ex. 10 min stationate se tarifeaza o ora; 1h 1m se tarifeaza 2h)

- Orice client poate vedea numarul de locuri disponibile
- La intrarea unei masini noi in parcare, sistemul parcarii inregistreaza numarul de
  inmatriculare al masinii
- La iesirea din parcare a unei masini, sistemul parcarii emite un sumar, in functie de
  durata stationarii. In rezolvarea acestui punct, ce informatii consideri ca ar fi esentiale ca
  parte a sumarului?
- Orice client poate interoga lista de masini stationate in parcare la un moment dat

  #### Cerinte tehnice

- Implementarea se va realiza folosind JavaScript ori TypeScript, toate datele fiind stocate
  in memorie, nefiind nevoie de stocarea permanenta nicaieri
- Scrierea unui cod cat mai curat si usor de inteles
- Realizarea unei interfete grafice simple care sa permita citirea datelor de la tastatura si
  afisarea lor in aceeasi pagina

## Live Application URL

The Application is deployed in https://pay-parking.pages.dev/#/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**
