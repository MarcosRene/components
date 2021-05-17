import { useToast } from '@contexts/toast';

import { Input, Button, Link } from '@components';

import './styles.scss';
import { useEffect, useState } from 'react';

function Dashboard() {
  const { addToast } = useToast();

  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading1(false);
      setIsLoading2(false);
      setIsLoading3(false);
    }, 4000);
  }, [isLoading1, isLoading2, isLoading3]);

  return (
    <>
      <Input name="teste" type="password" />
      <Button
        size="small"
        onClick={() => {
          addToast({
            type: 'info',
            title: 'lorem',
            description: 'lorem',
          });
          addToast({
            type: 'success',
            title: 'lorem',
            description: 'lorem',
          });
          addToast({
            type: 'error',
            title: 'lorem',
            description: 'lorem',
          });
        }}
      >
        Button toast
      </Button>

      <h4>Buttons</h4>
      <Button size="small">Button small</Button>

      <Button disabled>Button disabled</Button>

      <Button size="medium">Button medium</Button>

      <Button size="large">Button large</Button>

      <Button variant="primary">Button primary</Button>

      <Button variant="secondary">Button secondary</Button>

      <Button variant="outline">Button outline</Button>

      <Button size="small" variant="link">
        Link
      </Button>

      <h4>Loading button</h4>
      <Button
        isLoading={isLoading1}
        size="large"
        onClick={() => setIsLoading1(true)}
      >
        Loading button
      </Button>

      <Button
        variant="primary"
        isLoading={isLoading2}
        onClick={() => setIsLoading2(true)}
      >
        Loading button
      </Button>

      <Button
        variant="secondary"
        size="small"
        isLoading={isLoading3}
        onClick={() => setIsLoading3(true)}
      >
        Loading button
      </Button>

      <h4>Links Router</h4>
      <Link to="/" size="small" style={{ margin: '24px 10px' }}>
        Link small
      </Link>

      <Link to="/" size="medium" style={{ margin: '24px 10px' }}>
        Link medium
      </Link>

      <Link to="/" size="large" style={{ margin: '24px 10px' }}>
        Link large
      </Link>

      <Link to="/" variant="primary" style={{ margin: '24px 10px' }}>
        Link primary
      </Link>

      <Link to="/" variant="secondary" style={{ margin: '24px 10px' }}>
        Link secondary
      </Link>

      <Link to="/" variant="outline" style={{ margin: '24px 10px' }}>
        Link outline
      </Link>

      <Link
        to="/"
        size="small"
        variant="underline"
        style={{ margin: '24px 10px' }}
      >
        Link
      </Link>
    </>
  );
}

export default Dashboard;
