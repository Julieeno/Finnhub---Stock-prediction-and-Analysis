<h1 style="font-size:100px">Stocks Analysis & Prediction</h1>
<h1 style="font-size:60px">Progetto universitario inerente alla materia Technologies for Advanced Programming</h1>
<h1 style="font-size:38px">|Giuliano Lazzara 
    
| Matricola: X81000678</h1>

Progetto universitario sviluppato grazie alle conoscenze acquisite seguendo il corso di **Technologies for Advanced Programming**, del corso triennale d'informatica dell'**Università degli Studi di Catania**.  

Stocks Analysis & Prediction si pone l'obiettivo di prevedere il prezzo delle singole azioni del mercato azionario basandosi sui valori reali assunti da queste, grazie ai servizi forniti da **Finnhub.io**.

<h1 style="font-size:60px">Struttura</h1>
![Alt text](https://github.com/Julieeno/Finnhub---Stock-prediction-and-Analysis/tree/main/doc/diagram.png?raw=true)

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
