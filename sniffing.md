### Sniffing del traffico
Uno dei principali scopi dello sniffing del traffico USB è la creazione di un keylogger.

#### Linux
Il comando [`modprobe`](#modprobe) with `usbmon` permette di catturare pacchetti da un bus USB.

Run `modprobe usbmon` per caricare il driver `usbmon` nel kernel, per verificare che l'operazione abbia avuto successo usare il comando [`lsmod`](#lsmod): `lsmod | grep usbmon`.

Avviare Wireshark, saranno disponibili alcune interfacce `usbmon x`, per selezionare l'interfaccia giusta eseguire il comando [`lsusb`](#lsusb) nel terminale.

Nel caso in cui la cattura non andasse a termine l'utente potrebbe non avere i privilegi necessari per vedere i pacchetti, eseguire perciò il comando [`chmod`](#chmod) per acquisire i permessi: `chmod 644 /dev/usbmon2`, attenzione perché potrebbe aprire importanti falle di sicurezza.

Dopo aver terminato eseguire il comando [`rmmod`](#rmmod) per rimuover il driver `usbmon` dal kernel: `rmmod usbmon`.

#### Windows
Per catturare il traffico sul bus *USB* su *Windows* è necessario appoggiarsi al comando [`USBPcap`](#usbpcap): eseguirlo, selezionare il dispositivo ed effettuare la scansione, al terminine aprire il file creato dal comando con Wireshark.
