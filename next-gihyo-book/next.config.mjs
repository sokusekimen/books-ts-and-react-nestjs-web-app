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
};

export default nextConfig;
