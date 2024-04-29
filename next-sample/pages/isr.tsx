import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページはISRによってビルドに生成されてページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestampe = new Date().toLocaleString();
  const message = `${timestampe}`;
  console.log('getStaticProps', context.params);

  return {
    props: {
      message,
    },
    // 有効期限を設定することでISRになる
    revalidate: 60,
  }
}

export default ISR;