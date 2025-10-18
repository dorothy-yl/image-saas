import { db } from "@/server/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GitlabProvider({
      clientId:
      "db168614d580ece3a2e74a98db05e2a81a7b343ab02db6f86be79b631ca64e36",
      clientSecret:
      "gloas-c1263fcd9392bc5bd2604749af29bc37c6044c24158cea1612cfccdd550a6345"
    })
  ]
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
