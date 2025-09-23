import { RegisterForm } from '@/components/auth/register-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register — Student Life Toolkit',
};

export default function Page() {
  return (
    <div className="container-page py-10">
      <div className="mx-auto max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}

