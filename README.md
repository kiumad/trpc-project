### project features
- user can register and login (low security authentication system)
- users can add comment to posts
- user can see his/her information in the /profile path
- you can search in posts

## Install and run
* clone the project
```bash
git clone <URL>
```

* in the root of the root repo run:
```bash
npm install
```
* It is recommended to use `npm`.

* initialize the Prisma with this command (optional)
```bash
cd apps/api-server/
npx prisma migrate dev --name init     
cd ../../
```
* start the dev client and server
```bash
npm run dev
```
