// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  console.log("session", session);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
