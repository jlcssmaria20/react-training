import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { z } from 'zod'
import { prisma } from './prisma'

const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

export const appRouter = t.router({
  getPost: t.procedure
  .input(z.object({ userId: z.number() }))
  .query(({ input }) => {
    return prisma.postList.findMany({
      where: {
          userId: input.userId,
      },
      take: 10,
      select: {
        description: true,
      },
    })
  }),
  getAllPost : t.procedure
  .query(() => {
    return prisma.postList.findMany({
      // take: -10,
      select: {
        postId: true,
        userId: true,
        description: true,
        user : true,
        date: true,
      },
      orderBy: {
        date: 'desc'
      },
    })
  }),
  getAllUser: t.procedure
  .query(() => {
    return prisma.userList.findMany({
      select: {
        userId: true,
        username: true,
        firstname: true,
        lastname: true,
        birthdate: true,
        address: true,
        joinedDate: true,
        followingCount: true,
        followersCount: true,
      },
    })
  }),
  addPost: t.procedure
    .input(z.object({ userId: z.number(), description: z.string()}))
    .mutation(async ({ input }) => {
      await prisma.postList.create({
        data: {
          userId: input.userId,
          description: input.description,
        },
      })
    }),
  getUserAndPost: t.procedure
  .input(z.object({ userId: z.number() }))
  .query(({ input }) => {
    return prisma.userList.findMany({
      where: {
          userId: input.userId,
      },
      select: {
        username: true,
        firstname: true,
        lastname: true,
        birthdate: true,
        address: true,
        joinedDate: true,
        followingCount: true,
        followersCount: true,
        posts: true,
      },
    })
  }),
  getChat: t.procedure
    .input(z.object({ userId: z.number() }))
    .query(({ input }) => {
      return prisma.chatMessage.findMany({
        where: {
          user: {
            id: input.userId,
          },
        },
        take: -10,
        select: {
          id: true,
          msg: true,
        },
      })
    }),
  addUser: t.procedure
    .input(z.object({ username: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.chatUser.create({
        data: {
          username: input.username,
        },
      })
    }),
  addChat: t.procedure
    .input(z.object({ userId: z.number(), userMsg: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.chatUser.update({
        where: {
          id: input.userId,
        },
        data: {
          messages: {
            create: [{ msg: input.userMsg }],
          },
        },
      })
    }),
  getNote: t.procedure.input(z.string()).query(({ input }) => {
    return prisma.note.findUnique({
      where: {
        id: input,
      },
    })
  }),
  createNote: t.procedure.input(z.string()).mutation(({ input }) => {
    prisma.note.upsert({
      where: {
        id: 'save',
      },
      create: {
        id: 'save',
        content: input,
      },
      update: {
        content: input,
      },
    })
    return input
  }),
})

export type AppRouter = typeof appRouter
