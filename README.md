# tRPC Yektanet Chapter Project
This is an experimental project to learn tRPC. 
In this project, we are going to implement a simple blogging website using Vue/React as the front-end framework and tRPC + Express as the back-end framework. Our blogging website should have features as follows: (As well as bonus features)

## Recommended features:
* Should be able to view any posts on the home page with `post title`, `post brief description`, and `post last update date` in each postcard.
- On the home page posts should be paginated by the `infinite scrolling` mechanism.
- User should be able to search and filter posts by each post's title and description.
* Each user should be able `Create New Post` on a separate page e.g. `/posts/create`.
- Creating a post has an **Important Catch**. Each post should be identified with its `slug` field. Therefore, in the **Creation** phase, the unique post slug should be *validated*.
- By clicking on each post card user should be navigated to the post detail page using `slug` as an identifier. On the post, details page user should see all available information related to the post.
- Each user can add comments below other users' posts.
- All comments should be listed below each post.
- By default maximum of 5 comments should be visible. In case any post had more than 5 comments a 'Load More' button should be visible below the comments list.
- All data should be persisted in back-end.

## Bonus features:
- Using **Prisma** as a persistence DB is highly recommended and adds a huge bonus.
- Having aesthetic UI brings a bonus.
- Developing **Category** model and connecting it to `Post` model has extra bonus.
- In case you implemented category model, In home page user should be able filter each posts using category items.
- Having an Authentication system has a huge bonus.
- Implementing comments using WebSockets has a huge bonus.
- Writing Unit Tests has a bonus.

## Install and run
* fork the project to your account
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

### recommended vscode extensions:
- Volar + TypeScript Vue Plugin (Volar)
- Prisma
- Tailwind CSS IntelliSense

### used in this project:
- npm workspaces monorepo 
- Express.js
- Prisma
- Typescript
- tRPC
- Zod
- Tailwind
- Vue 3
- Vue Query (tanstack)
- Prettier
- Eslint