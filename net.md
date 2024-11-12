- Di base potrebbe funzionare `strings file.pcap | grep flag`

Alternativamente ci sono 2 possibilità:
- whireshark
- [pyshark](https://github.com/KimiNewt/pyshark/)
  ```Python
  import pyshark
  import requests as req
  
  # Carica il file di cattura
  capture = pyshark.FileCapture('NaaS.pcapng')
  
  # Definisci i criteri
  target_ip = '65.21.60.158'
  target_method = 'POST'
  target_resource = '/register'
  count = 0
  # Itera sui pacchetti
  for packet in capture:
      try:
          # Controlla se il pacchetto ha uno strato IP
          if 'IP' in packet:
              # Controlla se l'indirizzo IP di destinazione è quello desiderato
              if packet.ip.dst == target_ip:
                  
                  # Controlla se il pacchetto ha il protocollo HTTP
                  if 'HTTP' in packet:
                      # Controlla il metodo HTTP
                      if hasattr(packet.http, 'request_method') and packet.http.request_method == target_method:
                          # Controlla la risorsa HTTP
                          if hasattr(packet.http, 'request_uri') and target_resource in packet.http.request_uri:
                              if 'Gilda' in str(packet['URLENCODED-FORM']):
                                  print(str(packet['URLENCODED-FORM']))
                              # Aggiungi il pacchetto alla lista filtrata
                              #print(str(packet['URLENCODED-FORM']).split('\n')[4].split(' ')[4])
                              #print(str(packet['URLENCODED-FORM']).split('\n')[5].split(' ')[4])
                              #count += 1
      except AttributeError:
          # Gestisci i pacchetti che potrebbero non avere i campi richiesti
          pass
  print(count)
  ```
## netcat
`ncat -C --ssl localhost 31790` *send some data to an address with ssl/tls*

## `nmap`
`nmap -p 31000-32000 localhost --script ssl-enum-ciphers` *scan a portrange and output what ssl/tls ciphers they are using, but better the `-sV` option that show running service:* `nmap -p 31000-32000 localhost -sV`

