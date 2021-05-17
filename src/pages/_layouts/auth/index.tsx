import '../../styles.scss';
import bg from '@assets/sign-in.svg';

type AuthProps = {
  children: React.ReactNode;
};

export function Auth({ children }: AuthProps) {
  return (
    <div className="auth">
      <img src={bg} alt="bg" />
      {children}
    </div>
  );
}
