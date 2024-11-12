- **symlink**: they are **pointer** to another file or directory, look like in C, to create s symlink: `ln -s /path/to/original/file /path/to/symlink` *it means that the first file is the original file and the second is the pointer file*
- **`du`** *disk usage*
  - `du -b file` *space in bytes*
- [**`find`**](https://www.grymoire.com/Unix/Find.html#uh-0) `[path] [options] [expression]`
  - `-name`
  - `-size` *+1M   # files larger than 1 MB, -100k # files smaller than 100 KB*
  - `-mtime` *-7   # files modified in the last 7 days* or `-atime` *for access time*
  - `-perm` */111 has exe permession*
  - `-print` *display results* or `-ls` *to list the results*
  - `-type x` *d directory, f file*
  - `-maxdepth N` *limit the search to N levels of depth*
  - `-exec` *exec a command on the file: `-exec grep -l "testo_da_cercare" {} +`*
    - `+` Esegue il comando su tutti i file trovati in una sola volta, è più efficiente
    - `\` Esegue il comando specificato per ogni file trovato singolarmente
  - `-user username` 
  - `-group groupname` 
- **`grep`**
  - `grep picoCTF{ * -r` search *picoCTF* in every file in every directory
  - `file ./-file0* | grep ASCII` *search every file that is a particular type, but use: `find . -type f -exec file {} + | grep ASCII`*
- **`sort`** *order* `tail -n 1`
  - `-r` al contrario
  - `-k num` indica per quale colonna ordinare
  - `-n` ordina numericamente
- **`tail`** *output the last part of files:* `tail -n 1`
- **`tr`** *translate or delete characters*
  - `tr -s ' '` *sostituisce sequenze consecutive di spazi con uno spazio solo*
- **`uniq`**
  - `-c` *filter out repeated lines in a sorted file and count the occurrences of each line*
- **`wc`** print newline, word, and byte counts for each file
  - `-l` line count
- **`xargs`** `[options] [command]` take the output of a command and pass its as arguments to another command
- **ZIPS** [Zipception](https://training.olicyber.it/challenges#challenge-9)

  Unzip 3000 times a file:
  
  ```shell
  #!/bin/bash
  for i in {1..3000}
  do
    echo "Estrazione numero $i"
    
    n=$((3001 - i))
    unzip -o "flag$n.zip"
  
    rm -r "flag$n.zip"
  done
  
  ```

## Random pipe
- *Stampare solo alcune righe*:
  - `sed -n '3p'` *stampa solo la terza riga*
  - `head -n 5` *stampa le prime 5 righe*
  - `head -n -30` *stampa tutto tranne le ultime 30 righe*
  - `tail -n 5` *stampa le ultime 5 righe*
  - `tail -n +6` *stampa tutte le righe apparte le prime 5*
- `find . -type f -exec file {} + | grep ASCII | cut -d: -f1 | tr -d ' ' | xargs cat ` *trova i file che contengono ASCII text e li stampa. In mezzo toglie gli spazi iniziali e le parti che non sono file name*
- `find . -type f -size 1033c -exec cat {} + | tr -d ' '` *filter files with a 1033 bytes size and print their content*
- `find / -user bandit7 -group bandit6 -size 33c 2> /dev/null -exec cat {} +` *search in ehole the find systsem by user and gruop and delete the errors*
- `cat data.txt | sort | uniq -u` *stampa solo le righe che si ripetono una volta*
- `tr 'A-Za-z' 'N-ZA-Mn-za-m' < data.txt` *caesar cypher or a simply rotation or translation, in this case the key is 13*
- `diff file1 file2` *output different lines between file1 and file2*
- *Trovare il file più grosso*:
  - `find . -type f -exec du -b {} + | sort -nr | tail -n 1 ` *printa il file **con** la dimensione*
  - `find . -type f -exec du -b {} + | sort -nr | head -n1` *printa il file **con** la dimensione*
  - `find . -type f -exec du -b {} + | sort -nr | head -n1 | awk '{print $2}'` *se ci sono spazi nella seconda colonna printa solo la prima parola e niente dopo lo spazio*
  - `find . -type f -exec du -b {} + | sort -nr | head -n1 | cut -f2-` *estrae tutto a partire dalla seconda colonna dell'output, mantenendo i nomi dei file anche se contengono spazi.*
- *Copiare alcuni file di un ramo in un altro mantenendo la gerarchia delle directory*
  - `find /bin/ -type f -name '[w-zg]*' -exec cp --parents {} ./ \;` *--parents mantiene la gerarchia delle directory*
  - `find /bin/ -type f -name '[w-zg]*' | xargs cp --parents -t ./ ` *alternatica con xargs, -t specifica la directory di destinazione*
  - `find /bin/ -type f -name '[w-zg]*' | xargs -I {} cp --parents {} ./` *usa -I {} per sostituire {} con ciascun file trovato da find*
  - `find /bin/ -type f -name '[w-zg]*' -exec cp --parents {} ./ +` *non funziona perché non capisce quando termina -exec*
- *Calcolare lo spazio occupato dai file di proprietà di un certo utente (somma spazio)*
  - `find . -user user 2> /dev/null | xargs -I {} du -b {} 2> /dev/null | awk '{s = s+$1} END {print "total:", s, "bytes"}'`
  - `find . -user user 2> /dev/null -exec du -b {} 2> /dev/null \; | awk '{s = s+$1} END {print "total:", s, "bytes"}'`
  - `find . -user $(whoami) 2> /dev/null -exec du -b {} 2> /dev/null \; | awk '{s = s+$1} END {print "total:", s, "bytes"}' ` *se vuoi farla più figa*
- `strace df -h 2>&1|grep '('|cut -d '(' -f 1 |grep -E '^s.[aeiou].*' ` *Utilizzare strace (linux syscall tracer) per listare tutte le chiamate di sistema effettuate durante l'esecuzione del comando df -h , il cui nome inizi con la lettera s ed il cui nome abbia, in terza posizione, una vocale. Ordinarle per frequenza di chiamata ed estrarre la chiamata di sistema effettuata piu' frequentemente. Stampare in output 'n syscallname' dove n e' il numero di occorrenze della chiamata a syscallname. Risolvete l'esercizio utilizzando una pipeline. *Non* utilizzate i seguenti parametri per strace: -c , -C*
- `find / -name '*.c' -size -1k 2>/dev/null |xargs grep -E '[a,Z]'|cut -d':' -f1 |sort |uniq` *numero file contente lettere a Z dim 1k e punto c*
- `ps aux | cut -d ' ' -f1 | sort|uniq -c |sort -nr |head -n 1` *scrivere una pipe che permetta di trovare il proprietario che gestisce maggiori processi in esecuzione e il relativo numero di processi*
- `sudo find  / -type d -not -path  "/dev/*" -not -path "/mnt/*" -not -path "/proc/*" 2>/dev/null -print0 |xargs -0 ls -lah 2>/dev/null |grep '^-' |cut -f3 -d ' ' |sort |uniq -c | sort -nr | head -n1` *trovare la persona che possiede più file standard e quanti sono partendo da / escludendo /mnt /proc /dev*
- `strace top -b -n 1 2>&1 | grep '(' | cut -d '(' -f 1 | grep -v '%' | grep -v -E '^\s' | sort | uniq -c | sort -nr | tr -s ' ' | cut -d ' ' -f 2- | grep -v -E '^[1-5]\s'` *Mostrare le chiamate di sistema di top con più di 5 occorrenze*
- *Contare i processi in esecuzione per ogni utente e ordinarli al contrario*:
  - `ps aux | cut -d ' ' -f 1 | sort | uniq -c | sort -nr | tr -s ' ' | cut -d ' ' -f 2-` 
  - `ps aux | cut -d ' ' -f 1 | sort | uniq -c | sort -nr | sed 's/^[ \t]*//'`
- `find /percorso/directory -type d -exec sh -c 'find "{}" -maxdepth 1 -type f | wc -l | grep -q "^[1-9][0-9]*$" && echo "{}"' \;` *Trovare directory con almeno 10 file e stampare il nome della directory*
- `find . -type f -exec file {} \; | grep ASCII | cut -d ':' -f1 | xargs wc -l 2> /dev/null | tr -s '  ' | cut -d ' ' -f 2- | head -n -1` *Trova i file di testo e conta le righe*