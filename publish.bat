@echo off
echo. _________________________________________________________________________
echo.            Removing old website
echo. _________________________________________________________________________
cd ../zTech-ca.github.io/
for /F "delims=" %%i in ('dir /b') do (if not [%%i]==[CNAME] if not [%%i]==[_config.yml] if not [%%i]==[.git]  (del "%%i" /s/q || rmdir "%%i" /s/q))
echo. _________________________________________________________________________
echo.            Copying Build folder to Prouction folder
echo. _________________________________________________________________________
xcopy ..\website\build\* ..\zTech-ca.github.io\ /S /Y
echo. _________________________________________________________________________
echo.            Committing to the changes
echo. _________________________________________________________________________
cd ../zTech-ca.github.io/
git add .
git commit -m "Built on:  %date% - %time%"
echo. _________________________________________________________________________
echo.            Publishing the site
echo. _________________________________________________________________________
git push
cd ../website/
echo. _________________________________________________________________________
echo.            Purging Old site from Cloudflare
echo. _________________________________________________________________________
curl -X POST "https://api.cloudflare.com/client/v4/zones/039881270169f95dffadf6fa4c4ec451/purge_cache"  -H "Authorization: Bearer jUoKJicaftiDqtqIE0Hb4tBILeSAk7c8RGVxJM5t"  -H "Content-Type: application/json" --data "{\"purge_everything\":true}"