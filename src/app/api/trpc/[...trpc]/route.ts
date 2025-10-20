import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from "next/server";
import { creatTRPCContext, testRouter } from '@/utils/trpc';

const handler = (request: NextRequest) => {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: testRouter,
        createContext: creatTRPCContext
    });
}

export { handler as GET, handler as POST };

