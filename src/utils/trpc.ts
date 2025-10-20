import { getServerSession } from "next-auth";
import { TRPCError, initTRPC } from "@trpc/server";

export async function createTRPCContext() {
  const session = await getServerSession();

  console.log("---->", session);

  // 不再在这里强制检查登录，而是返回 session（可能为 null）
  return {
    session,
  };
}
const t = initTRPC.context<typeof createTRPCContext>().create();

const { router, procedure, createCallerFactory } = t;


// 日志中间件
const loggerMiddleware = t.middleware(async ({ next, ctx }) => {
  const start = Date.now();
  const result = await next({ ctx });
  console.log("---->Api time:", Date.now() - start, "ms");
  return result;
});

// 认证中间件 - 检查用户是否已登录
const authMiddleware = t.middleware(async ({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "未登录" });
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session, // 确保 session 存在
    },
  });
});

// 公开的 procedure（不需要登录）
const publicProcedure = procedure.use(loggerMiddleware);

// 受保护的 procedure（需要登录）
const protectedProcedure = procedure.use(loggerMiddleware).use(authMiddleware);

export const testRouter = router({
  // 使用 publicProcedure，允许未登录用户访问
  hello: publicProcedure.query(async ({ ctx }) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
    return "Hello, world";
  }),
});

export type TestRouter = typeof testRouter;

export const serverCaller = createCallerFactory(testRouter);