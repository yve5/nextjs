import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <Alert type="success">Hello World</Alert>

      <h1>First Post</h1>
      <p>Lorem ipsum...</p>
    </Layout>
  );
}
