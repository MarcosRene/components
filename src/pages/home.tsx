import { useToast } from '../contexts/toast';

import { Input, Button } from '../components';

function Dashboard() {
  const { addToast } = useToast();

  return (
    <>
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
        Button small
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
    </>
  );
}

export default Dashboard;
