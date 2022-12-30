<h1 style="font-size:100px">Stocks Analysis & Prediction</h1>

The aim of **Stocks Analysis \& Prediction** is to predict the price of a single stock market, using the real prices that this has, thanks to the services provided by **Finnhub.io**.

<h1 style="font-size:60px">Struttura</h1>

![alt text](doc/diagram.png?raw=true)

Each software is packaged inside what is called a "container", thanks to **Docker**.
It has been developed a file wrapper in Python that uses the libraries **socket** and **websocket**. This wrapper collects the required information from the API of Finnhub, and then it transmits these to **Logstash**.
Logstash's job consists in collect all the data specified in the **request** of the **wrapper file** and submitting these to **Kafka**.

Data are taken from Kafka and these have been sorted in a Data Frame, to make the elaboration easier. These are the chosen features:

    -**Name** of the company;

-**Symbol** that represents the company in the market.

-**LasPrice** that is the value of a stock of the company at the moment that the program is passing the information;

-**Time**, exact date and time of the moment when the information is passed;

-**Country** of origin of the company;

-**WebUrl** that is a direct link to the official page of the company;

-**MarketCap** i.e. the capitalisation of the stock on the market;

To predict the price of a stock has been applied the **Linear Regression** that estimates the price relying on a dependent variable.
where $m$ and $q$ are two parameters that the function **LinearRegression**, imported from the library **spark.ml.regression**, optimizes autonomously.
It has been implemented also the **Root Squared Error** function, to calculate the distance between the estimated values and the real values.

For the goal of "Stock Analysis \& Prediction have been used two **ElasticSearch**'s indexes: **stocks** and **stocks-prediction**.

In the figure below it is possible to see the final visualization of the data; In this particular screenshot, it is possible to see the predicted price (in blue) and the real last price (in green) of a stock of Tesla. 

![alt text](doc/Screenshot_dashboard.png?raw=true)

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
