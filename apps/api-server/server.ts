import { initTRPC } from '@trpc/server'
import z from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'
import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

import cors from 'cors'
import { createPost, loadPost, postDetail } from './posts'
import { register, checkUser, userData } from './users'
import { addComment , getPostComment } from './comment'
const t = initTRPC.create()
const prisma = new PrismaClient()

const appRouter = t.router({
    hello: t.procedure.input(z.string().nullish()).query((req) => {
        return `hello ${req.input ?? 'world'}`
    }),
    addPost: t.procedure
        .input(z.object({ title: z.string(), text: z.string() , username : z.string() }))
        .query(async (req) => {
            const today = new Date()
            return await createPost({
                title: req.input.title,
                text: req.input.text,
                username: req.input.username,
                createdAt: today,
                updatedAt: today,
            })
        }),
    addUser: t.procedure
        .input(
            z.object({
                username: z.string(),
                fullName: z.string(),
                password: z.string(),
                image: z.string(),
            })
        )
        .query(async (req) => {
            return await register({
                username: req.input.username,
                fullName: req.input.fullName,
                password: req.input.password,
                image: 'ddd',
            })
        }),
    addComment: t.procedure
        .input(
            z.object({
                username: z.string(),
                text: z.string(),
                postId: z.number(),
            })
        )
        .query(async (req) => {
            return await addComment({
                username: req.input.username,
                text: req.input.text,
                postId: req.input.postId,
            })
        }),
        getPostComment: t.procedure
        .input(
           z.string()
        )
        .query(async (req) => {
            return await getPostComment(req.input)
        }),
    getPost: t.procedure
        .input(
            z.object({
                // limit: z.number().min(1).max(100).nullish(),
                cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
            })
        )
        .query(async ({ input }) => {
            const limit = 30
            const { cursor } = input
            // const total = prisma.post.

            const items = await prisma.post.findMany({
                take: limit,
                orderBy: [{ id: 'asc' }],
                cursor: cursor ? { id: cursor + 1 } : undefined,
            })
            let nextCursor: typeof cursor | undefined = undefined
            if (items.length > limit) {
                const nextItem = items.pop()
                nextCursor = nextItem!.id
            }
            return {
                items,
                nextCursor,
            }
        }),
    checkUser: t.procedure
        .input(
            z.object({
                username: z.string(),
                password: z.string(),
            })
        )
        .query((req) =>
            checkUser({
                username: req.input.username,
                password: req.input.password,
            })
        ),
    userData: t.procedure.input(z.string()).query((req) => userData(req.input)),
    getPostDetail: t.procedure
        .input(z.string().nullish())
        .query((req) => postDetail(req.input)),
})

export type AppRouter = typeof appRouter

async function server() {
    // express implementation
    const app = express()
    app.use(cors())
    app.use((req, _res, next) => {
        // request logger
        console.log('⬅️ ', req.method, req.path, req.body ?? req.query)

        next()
    })

    app.use(
        '/trpc',
        trpcExpress.createExpressMiddleware({
            router: appRouter,
        })
    )
    app.get('/', (_req, res) => res.send('hello'))
    app.listen(2021, () => {
        console.log('listening on port 2021')
    })
}

server()
