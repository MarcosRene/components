import { PropsWithChildren } from 'react';
import { Layout } from '@components';

export function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return <Layout>{children}</Layout>;
}
