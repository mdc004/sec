 90 `macchanger` (to hide identity)
 91     MAC Changer is an utility that makes the maniputation of MAC addresses of network interfaces easier.
 92
 93     Features:
 94     - set specific MAC address of a network interface
 95     - set the MAC randomly
 96     - set a MAC of another vendor
 97     - set another MAC of the same vendor
 98     - set a MAC of the same kind (eg: wireless card)
 99     - display a vendor MAC list (today, 6200 items) to choose from
100
101     1. Using [`ip addr`](#ip) lists all the network interfaces
102     2. Show the current inteface's ip address `macchanger -s interface_name`
103     3. Assing a random ip address`sudo macchanger -r interface_name` or `sudo macchanger --mac=a2:42:b0:20:ee:03 interface_name` to assign a specific address.
104     4. To restore the default address:`sudo apt remove macchanger`
