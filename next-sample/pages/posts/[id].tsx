// リスト 3.20 p123

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Nexxt App</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <main>
        <p>このページは静的サイド生成によってビルド時に生成されたページです。</p>
        <p>{`/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

// 生成したいページのパスパラメータの組み合わせを返す
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    },
  ]

  return {
    paths,
    // falseにすると404ページを返す
    // trueにすると router.isFallback がtrueになり、その後getStaticPropsを実行しpropsをクライアントに送り再描画される。また保存されるらしい
    fallback: true
  }
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
  return {
    props: {
      id: context.params!['id'],
    }
  }
}

export default Post;