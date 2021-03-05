import Head from "next/head";
import { Stack, Code, Center, Box } from "@chakra-ui/react";

// components
import { CodeBlock, Layout } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modbus tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <CodeBlock />
        </Layout>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
