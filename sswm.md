1. Protocolli Challenge Response
   1. In che cosa consistono e a che cosa servono i protocolli di tipo challange-response? Dare un esempio di un semplice protocollo basato su nonce e chiavi simmetriche e spiegare:
   2. Perché il protocollo non può subire un replay attack
   3. A cosa servono nonce e timestamp
   4. Come si deve modificare il protocollo in modo che si ottenga mutua autenticazione 
   5. Si supponga che due utenti Bob e Alice condividano una chiave segreta KAB . Si descriva il più semplice protocollo di autenticazione unilaterale basato sul meccanismo challange-response in cui Alice viene autenticata.

2. SQL Injection
   1. In che cosa consiste un attacco di tipo SQL injection e quali condizioni devono essere soddisfatte a lato client e a lato server perchè sia possibile un tale attacco? Nella risposta fornire anche un esempio, specificando sia le caratteristiche della pagina da cui è possibile effettuare l’attacco, che il codice vulnerabile a lato server. Inoltre illustrare come sia possibile difendersi da questa tipologia di attacco. Inoltre:
   2. In che modo un attacco di tipo Blind SQL Injection differisce da un attacco di SQL injection tradizionale? Quali sono le tecniche comunemente utilizzate per eseguire un blind SQL injection? 
   3. Discutere l’importanza della validazione dell’input nella protezione contro gli attacchi di SQL injection. Quali tecniche di validazione sono considerate più efficaci e perché?
   4. Fornire un esempio di codice SQL vulnerabile a un attacco di SQL injection. Come potrebbe un attaccante sfruttare questa vulnerabilità?
   5. Quali contromisure possono essere adottate per prevenire SQL Injection in un’applicazione PHP/MySQL?

3. XSS
   1. Si spieghi cosa si intende per attacco Cross-Site Scripting (XSS) e quali siano le principali tipologie di XSS, evidenziandone le differenze. Si descrivano inoltre:  
   2. Un esempio pratico di attacco XSS, spiegando quali potrebbero essere le conseguenze per l’utente e il sistema.
   3. Quali tecniche esistono per prevenire gli attacchi di tipo XSS, fornendo alcuni esempi pratici.
   4. Quale sia la differenza tra validazione lato server e lato client.
   5. Specificare la differenza tra la tipologia di attacco persistente e quello non persistente.
   6. Spiegare possibili contromisure. Per eliminare il codice JavaScript dall’input dell’utente è sufficiente cercare il tag `<script>` e rimuoverlo?
   7. Un attaccante inietta il seguente payload nella pagina HTML inviata da un server Web per eseguire un attacco XSS. `<script>alert(document.cookie)</script>` Se il server ha previsto la seguente CSP, l’attacco XSS avrà successo? Giustificate la vostra risposta. `CSP: Content-Security-Policy: script-src ’self’ ’nonce-AXk3123kslfKFAoaZZ098’;`
   8. Confrontare le tre varianti di XSS: Reflected, Stored, DOM-based. Per ciascuna variante, indicare un vettore d’attacco e una difesa
   9. Descrivere come un attacco XSS possa essere utilizzato per eseguire session hijacking. Che contromisure vanno adottate per evitare la possibilità di tale attacco?

4.  Cookie
    1. A cosa serve il campo Set-Cookie nell’header del HTTP response? Nella risposta: (i) spiegare a cosa servono i cookie, (ii) come funzionano e (iii) elencare almeno tre possibili attributi dei cookie e il loro scopo.
    2. Un’applicazione web imposta i seguenti cookie: `Set-Cookie: session=abc123; Secure; HttpOnly; SameSite=None`
      1. Spiegare in dettaglio se e quando il cookie verrà inviato
      2. iscutere i rischi reali associati a questa configurazione in un contesto cross-site
    3. Confrontare gli attributi dei cookie HttpOnly, Secure e SameSite. Spiegare quali minacce mitigano
    4. In che modo i tracking cookie si differenziano dai “normali” cookie, anche dal punto di vista di eventuali problemi di sicurezza per l’utente?

5.  SOP
    1. Cos’è la Same Origin Policy (SOP) e perché è fondamentale per la sicurezza delle applicazioni web? Nella risposta:
    2. Descrivere i concetti di origin e same-origin in ambito web, spiegando quali fattori determinino l’origine di una risorsa.
    3. Chi la applica e quando?
    4. Spiegare quali rischi di sicurezza potrebbero derivare dall’assenza o dall’inefficace implementazione della Same Origin Policy.
    5. Analizzare il seguente scenario: una pagina web carica un iframe da un dominio differente. Spiegare quali interazioni siano permesse e quali siano bloccate dalla Same Origin Policy.
    6.  Se `site-a.com` carica, dentro un iframe, una pagina da un altro dominio, ad esempio `site-b.com`, la same origin policy permetterà al codice Javascript del sito `site-a.com` di accedere al contenuto del sito `site-b.com`?
    7.  Spiegare cos’è il Cross-Origin Resource Sharing (CORS) e in che modo permette di aggirare in sicurezza la Same Origin Policy.

6.  Cross Site Request Forgery:
    1. Spiegare la tipologia di attacco denominata Cross Site Request Forgery e in quali condizioni un tale attacco sia possibile. Fornire un esempio realistico di payload CSRF per cambiare l’indirizzo email dell’utente su un sito vulnerabile

7. Nell’ambito del sistema Kerberos, dire quali sono (e descrivere brevemente) i compiti principali dell’Authentication Server (AS) e quelli del Ticket Granting Server (TGS) e per quale motivo lo si possa considerare un esempio di SSO (Single Sign On) centralizzato.

8.  Apache
    1. In Apache, che tipo di regole si possono scrivere utilizzando le direttive user-based?
    2. Commentare le seguenti direttive contenute nel file di configurazione di un Web server Apache specificando a cosa servono e cosa succede quando viene richiesta una pagina che è regolata da queste direttive.
    
    ```
    <Location />
    AuthType Basic
    AuthName "Restricted Access"
    AuthUserFile /etc/apache2/.htpasswd
    Require valid-user
    </Location>
    ```

    3. Descrivere i principali meccanismi di controllo accessi in Apache, specificando differenze tra configurazione tramite file `.htaccess` e direttive nel file principale (`httpd.conf` o `apache2.conf`)
    4. Che ruolo ha il file `.htaccess` in un’installazione Apache? Quali sono i rischi legati a `.htaccess` mal gestito?
    5. Descrivere come funziona l’autenticazione Basic del protocollo HTTP in Apache. Quali sono i limiti di sicurezza?
    6. Analizzare il seguente snippet e spiegare cosa succede quando un utente tenta di accedere a `/admin`:
    
    ```
    <Directory "/var/www/html/admin">
    AuthType Basic
    AuthName "Area Riservata"
    AuthUserFile /etc/apache2/.htpasswd
    Require user alice
    </Directory>
    ```

    7. Analizzare i permessi e la sicurezza della seguente configurazione di Apache:
    
    ```
    <Directory "/var/www/html/private">
    Require ip 192.168.0.0/16
    </Directory>
    ```
  
9.  Autenticazione
    1.  Nel caso dell’autenticazione basata su caratteristiche biometriche, quali sono le proprietà che deve avere una caratteristica biometrica perchè possa venire utilizzata per l’autenticazione? Rispetto all’autenticazione basata sulla conoscenza, quali sono i vantaggi e gli svantaggi?
    2.  Il sistema che state progettando prevede una fase di autenticazione. Potendo scegliere tra autenticazione basata su caratteristiche biometriche e autenticazione basata sulla conoscenza, quale scegliereste e perché?
    3.  Perché l’autenticazione basata su password è intrinsecamente debole? Quali vulnerabilità specifiche si verificano nei sistemi che fanno uso di password memorizzate in chiaro o hashate male?
    4.  Perché è importante usare funzioni di hashing con salt per memorizzare password?

10. Quali sono le tecniche possibili (sia stateful che stateless) per profilare il comportamento degli utenti online? Quali sono le possibili contromisure?

11. Cosa significa garantire la sicurezza di un sistema in termini di proprietà di sicurezza? Nella risposta discutere il significato e le differenze (se esistono) tra confidenzialità, privacy e anonimato

12. Linux
    1.  Nel modello di sicurezza dei sistemi Unix/Linux, quale ruolo hanno gli utenti, i gruppi e i permessi (read, write, execute)? Spiegare come interagiscono con setuid e setgid.
    2.  Si supponga che Bob, dopo essersi connesso ad un sistema Linux/Unix, voglia eseguire un file eseguibile Java denominato programma.class di cui non è proprietario. Come devono essere definiti i permessi del file perchè a Bob sia comunque possibile eseguire il file? Il fatto che il Setuid sia settato cambierebbe qualcosa?

13. Descrivere il sistema di autorizzazioni (permission) di Android e iOS. Come possono app malevole o vulnerabili abusare dei permessi concessi?

14. Nella crittografia a chiave simmetrica quali sono i vantaggi e gli svantaggi nell’utilizzo di un KDC (Key Distribution Center) come terza parte fidata per la gestione e distribuzione delle chiavi

15. Qual è la differenza tra un certificato digitale e una firma digitale?
