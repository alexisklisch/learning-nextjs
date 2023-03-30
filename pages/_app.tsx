import { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import '../global/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp