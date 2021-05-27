import { Input, Link } from '@components';

function SignIn() {
  return (
    <form>
      <Input
        name="email"
        placeholder="Enter a e-mail"
        defaultValue="email@email.com"
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter a password"
        defaultValue="12345678"
      />

      <Link to="/dashboard" className="link-auth" variant="primary">
        Login
      </Link>
    </form>
  );
}

export default SignIn;
