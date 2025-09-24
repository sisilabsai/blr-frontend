'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/api/admin');
  }, [router]);

  return null;
};

export default LoginPage;
