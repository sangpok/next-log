'use client';

import styles from './Header.module.scss';
import Button from '../Button';
import { redirect, useRouter } from 'next/navigation';
import { createClient } from '@/app/utils/supabase/client';
import { useEffect } from 'react';
import Link from 'next/link';

import { User } from '@supabase/supabase-js';
import { logout } from './action';

export function Header({ user }: { user: User | null }) {
  const router = useRouter();

  const hasUser = user !== null;

  if (hasUser) {
    return (
      <header className={styles.container}>
        <Link className={styles.logo} href="/">
          넥로그
        </Link>

        <div className={styles.buttonGroup}>
          <p className={styles.email}>{user.email}</p>
          <form>
            <Button as="outline" formAction={logout}>
              로그아웃
            </Button>
          </form>
        </div>
      </header>
    );
  }

  return (
    <header className={styles.container}>
      <Link className={styles.logo} href="/">
        넥로그
      </Link>

      <div className={styles.buttonGroup}>
        <Button as="filled">회원가입</Button>
        <Button as="outline" onClick={() => router.push('/login')}>
          로그인
        </Button>
      </div>
    </header>
  );
}
