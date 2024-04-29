import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest} legacyBehavior>
      <a className={className}>{children}</a>
    </Link>
  );
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`;

const PageList411: NextPage = () => {
  return (
    <div>
      <StyledLink href="/">Go to Index</StyledLink>
    </div>
  );
}

export default PageList411;
