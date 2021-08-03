import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { Layout } from "../components/Layout";
import { ApplicationPaths } from "../types";
import { TOKEN_KEY } from "../utils/authenticated";

const ranking = () => {
  return (
    <Layout title="ranking" currentPath="ranking">
      {" "}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_KEY]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: ApplicationPaths.START,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default ranking;