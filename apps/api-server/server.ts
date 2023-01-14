import { initTRPC } from '@trpc/server'
import z from 'zod'
import * as trpcExpress from '@trpc/server/adapters/express'

import express from 'express'

import cors from 'cors'
import { createPost, loadPost, postDetail } from './posts'
import { register, checkUser } from './users'
const t = initTRPC.create()

const appRouter = t.router({
    hello: t.procedure.input(z.string().nullish()).query((req) => {
        return `hello ${req.input ?? 'world'}`
    }),
    addPost: t.procedure
        .input(z.object({ title: z.string(), text: z.string() }))
        .query(async (req) => {
            const today = new Date()
            return await createPost({
                title: req.input.title,
                text: req.input.text,
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
    getPost: t.procedure.query((req) => loadPost()),
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
