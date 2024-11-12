1. Installare il servizio: `sudo apt install openssh-server`
2. Cambiare porta: `sudo nano /etc/ssh/sshd_config`
3. Abilitare porta firewall: `sudo ufw allow 2222/tcp`
4. Controllare lo status: `sudo systemctl status ssh`
5. Abilitarlo: `sudo systemctl enable --now ssh`
6. Riabilitarlo: `sudo systemctl restart ssh`
7. Disabilitarlo: `sudo systemctl disable --now ssh`
8. Chiudere porta firewall: `sudo ufw deny 1984/tcp`
