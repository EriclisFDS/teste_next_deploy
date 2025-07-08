import { config } from "@/amplifyconfiguration";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";

export const { runWithAmplifyServerContext, createAuthRouteHandlers } =
  createServerRunner({
    config,
    runtimeOptions: {
      cookies: {
        domain: ".d12addczmn3abk.amplifyapp.com",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      },
    },
  });

export const amplifyApi = generateServerClientUsingCookies({
  config: config,
  cookies,
  authMode: "userPool",
});
