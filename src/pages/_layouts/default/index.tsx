import { PropsWithChildren } from 'react';
import { Layout } from '../../../components';

export function DefaultLayout({ children }: PropsWithChildren<any>) {
  return <Layout>{children}</Layout>;
}
