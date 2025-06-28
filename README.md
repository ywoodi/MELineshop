
> Webshop (GitHub Pages)
> https://ywoodi.github.io/MELineshop/#/

## Team Members:
- Sabrina Gabriel s2310238028
- Jana Autengruber s2210238003
- Lukas Essig s2310238025
- Elena Gewessler s2310238031
- Michaela Holzmann s2310238040
- Merve Karatas s2310238043

## Local Setup if deployment fails
Should for whatever reason GitHub Pages have trouble deploying the Page, here are the instructions for hosting locally via Docker Desktop:
1. Install Docker Desktop
2. Open the Terminal and locate a folder to put the Docker Container in
3. execute command: `git clone https://github.com/rru-hgb/fhooe-hypernode-dock.git`
4. change into directory (`cd fhooe-hypernode-dock`)
5. execute command: `docker compose up -d`
6. after the container is succesfully built, change directory to `fhooe-hypernode-dock/node`
7. clone website repository `git clone https://github.com/ywoodi/MELineshop.git`
8. open docker terminal via command `docker exec -it hypernode /bin/bash`
9. change into directory `cd home/node/MELineshop`
10. start local dev environment via command `npm run dev -- --host`
11. the website should now run on port 5555 - open `http://localhost:5555`

