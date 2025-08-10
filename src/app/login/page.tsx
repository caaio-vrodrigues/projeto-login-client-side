// components
import { LoginGate } from '@/components/login/login-gate/LoginGate';
import { Login } from '@/components/login/login/Login';

const LoginPage = () => {
  return <LoginGate>
    <div className='containerLogin'>
      <Login/>
    </div>
  </LoginGate>
}
export default LoginPage;