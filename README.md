## Deployment
 1. Ensure that projects [zTech-ca/website](https://github.com/zTech-ca/website) and [zTech-ca/zTech-ca.github.io](https://github.com/zTech-ca/zTech-ca.github.io) are cloned in the same directory, subdirectories _.\website\\_ and _.\zTech-ca.github.i\o\_

 ```bash
├─── SomeDirectory
│   ├─── website
│   │    │
│   │    ...
│   └─── zTech-ca.github.io
│        │
│        ...
...
 ```
2. Build the site by running `npm run-script build` in the folder _.\website\\_
3. Copy the build folder contents to _.\zTech-ca.github.io\\_ by running `xcopy ..\website\build\* ..\zTech-ca.github.io\ /S /Y`
4. Commit the changes to project [zTech-ca/zTech-ca.github.io](https://github.com/zTech-ca/zTech-ca.github.io) by running the following comands:
```bash
cd ../zTech-ca.github.io/
git add .
git commit -m "Built on:  %date% - %time%"
git push
cd ../website/
```
5. Wait for the cache to expire on Cloudflare and your browser, or manually delete the caches.
