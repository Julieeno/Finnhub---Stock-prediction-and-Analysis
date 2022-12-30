<h1 style="font-size:100px">Stocks Analysis & Prediction</h1>

The aim of **Stocks Analysis \& Prediction** is to predict the price of a single stock market, using the real prices that this has, thanks to the services provided by **Finnhub.io**.


Progetto universitario sviluppato grazie alle conoscenze acquisite seguendo il corso di **Technologies for Advanced Programming**, del corso triennale d'informatica dell'**Università degli Studi di Catania**.  

Stocks Analysis & Prediction si pone l'obiettivo di prevedere il prezzo delle singole azioni del mercato azionario basandosi sui valori reali assunti da queste, grazie ai servizi forniti da **Finnhub.io**.
![alt text](doc/diagram.png?raw=true)


<h1 style="font-size:60px">Struttura</h1>

![alt text](doc/diagram.png?raw=true)

<h1 style="font-size:60px">Guida d'uso e requisiti</h1>

Per eseguire correttamente il programma bisogna avere:

-Docker;

-Php;

-Netcat

-Scaricare [kafka_2.12-2.4.1.tgz](https://drive.google.com/file/d/1MPFeLHL2rLuKNHaG-LnMnCfV5JXyXOQc/view?usp=sharing), e posizionarlo nella cartella **kafca/src/setup** del progetto;

-Scaricare [spark-2.4.5-bin-hadoop2.7.tgz](https://drive.google.com/file/d/18PQVf31rMsvkLAEDDkYlyc6pLEb1pvMR/view?usp=sharing), e posizionarlo nella cartella **spark/src/setup** del progetto;

-Eseguire il file di script *build* 

$ ./build

<h1 style="font-size:60px">Esecuzione</h1>

Dopo aver seguito tutti i punti della guida, aprire il terminale dentro la cartella principale ed eseguire il file di script *start_gnome*

$ ./start_gnome

Per chiudere l'esecuzione non basta chiudere i terminali, ma bisogna eseguire un ulteriore comando *stop*

$ ./stop
