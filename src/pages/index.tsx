import { useToast } from '../contexts/toast';

import { Layout, Input, Button } from '../components';

const Home = () => {
  const { addToast } = useToast();

  return (
    <Layout>
      <Input name="teste" type="password" />

      <Button
        size="small"
        variant="dark"
        onClick={() =>
          addToast({
            type: 'success',
            title: 'lorem',
            description: 'lorem',
          })
        }
        style={{ marginTop: '32px' }}
      >
        Button toast
      </Button>

      <Button size="small" variant="basic" style={{ marginTop: '32px' }}>
        Button medium
      </Button>

      <Button size="medium" variant="basic" style={{ marginTop: '32px' }}>
        Button medium
      </Button>

      <Button size="large" variant="basic" style={{ marginTop: '32px' }}>
        Button large
      </Button>

      <Button size="" variant="orange">
        Button primary
      </Button>

      <Button size="" variant="dark">
        Button secondary
      </Button>

      <Button size="" variant="outline">
        Button outline
      </Button>

      <Button size="small" variant="link">
        Link
      </Button>
    </Layout>
  );
};

export default Home;
