win da problemi:
- sfc /scannow - Controlla i file di sistema di Windows e tenta di riparare quelli corrotti o mancanti
- `DISM` se `sfc` non va:
    - `DISM /Online /Cleanup-Image /CheckHealth`  
    - `DISM /Online /Cleanup-Image /ScanHealth`  
    - `DISM /Online /Cleanup-Image /RestoreHealth`
- `chkdsk C: /f /r` controlla e ripara errori sul disco (hdd o ssd)
