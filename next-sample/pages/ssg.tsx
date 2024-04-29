import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルドに生成されてページです。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
}

// ビルド時に呼ばれ、propsをコンポーネント(NextPage)に返す
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestampe = new Date().toLocaleString();
  const message = `${timestampe}`;
  console.log('getStaticProps', context.params);

  return {
    props: {
      message,
    },
  }
}

export default SSG;