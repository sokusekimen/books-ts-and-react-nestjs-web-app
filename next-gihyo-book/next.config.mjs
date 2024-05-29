/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではReact Tesiting Libraryで使用するdata-test-id属性を削除
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }

    return compilerConfig
  })(),
  // CORS対策でAPIプロキシを設定する
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match`,
        destination: `${process.env.API_BASE_URL}/:match`
      },
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:resource/:match`,
        destination: `${process.env.API_BASE_URL}/:resource/:match`
      }
    ]
  },
};

export default nextConfig;
