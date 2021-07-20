import time
import json
import requests
import sys
import socket
import websocket

apiKey = 'c3n9kpiad3iabnjj5t1g'

symbol = ''
profile = ''

def send_to_logstash(host, port, data):
    error = True
    while(error):
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            print("Socket created. sock: " + str(sock))
        
            sock.connect((host, port))
            print("Socket connected to HOST: " + host + " PORT: " + str(port))
            print("Socket connected. Sock: " + str(sock))

            print("Sending message: " + str(data))

            sock.sendall(json.dumps(data).encode())
            print("End connection")
            sock.close()
            error = False
        except:
            print("Connection error. There will be a new attempt in 10 seconds")
            time.sleep(10)

def on_message(ws, message):
    # print(message)
    global profile

    msg = json.loads(message)
    if 'data' in msg:
        for i in range(0, len(msg['data'])):
            data = {
                'Name': profile['name'],
                'Symbol': msg['data'][i]['s'],
                'LastPrice': msg['data'][i]['p'], 
                'Time': msg['data'][i]['t'],
                'Country': profile['country'],
                'WebUrl': profile['weburl'],
                'MarketCap': profile['marketCapitalization'] 
            }
            print(data)
            send_to_logstash('10.0.100.8', 5001, data)

    
    print('\n#######################\n')
    time.sleep(10)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    print('{"type":"subscribe","symbol":"' + symbol + '"}')
    ws.send('{"type":"subscribe","symbol":"' + symbol + '"}')

def main():
    if(len(sys.argv) != 2):
        sys.stderr.write('Use python3 ' + str(sys.argv[0]) + ' [query]\n')
        sys.exit(-1)

    r = requests.get('https://finnhub.io/api/v1/search?q=' + sys.argv[1] + '&token=' + apiKey)

    global symbol
    
    symbolList = r.json()["result"]
    for i in range(0, len(symbolList)):
        symbol = symbolList[i]["symbol"]
        if symbolList[i]["description"].lower().find(sys.argv[1].lower()) != -1 and symbol.find(':') == -1 and symbol.find('/') == -1 and symbol.find('.') == -1:
            break

        symbol = ''

    if not symbol:
        sys.stderr.write('#####################ERRORE#####################\n')
        exit()
    print(symbol)

    r = requests.get('https://finnhub.io/api/v1/stock/profile2?symbol=' + symbol + '&token=' + apiKey)
    global profile 
    profile = r.json()
    
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("wss://ws.finnhub.io?token=" + apiKey,
                            on_message = on_message,
                            on_error = on_error,
                            on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()

if __name__ == "__main__":
    main()
