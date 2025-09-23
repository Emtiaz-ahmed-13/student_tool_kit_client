import { LoginForm } from '@/components/auth/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login — Student Life Toolkit',
};

export default function Page() {
  return (
    <div className="container-page py-10">
      <div className="mx-auto max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

