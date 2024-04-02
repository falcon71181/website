import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z.string().startsWith("ghp_"),
  },
  client: {
    // client side
  },
  experimental__runtimeEnv: {
    // GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
})
