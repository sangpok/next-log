'use client';

import styles from './page.module.scss';
import { login, signup } from './action';
import Button from '../components/Button';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

export default function Login() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('message');

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <LoginFormFieldset />
        {/* <fieldset className={styles.fieldset}>
          <legend>로그인 정보 입력</legend>

          <label htmlFor="email">이메일</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="password">비밀번호</label>
          <input id="password" name="password" type="password" required />
        </fieldset> */}

        <SubmitButton />

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </section>
  );
}

function LoginFormFieldset() {
  const { pending: isLogging } = useFormStatus();

  return (
    <fieldset className={styles.fieldset} disabled={isLogging}>
      <legend>로그인 정보 입력</legend>

      <label htmlFor="email">이메일</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">비밀번호</label>
      <input id="password" name="password" type="password" required />
    </fieldset>
  );
}

function SubmitButton() {
  const { pending: isLogging } = useFormStatus();
  const buttonText = isLogging ? '로그인 중...' : '로그인';

  return (
    <Button as="filled" formAction={login} disabled={isLogging}>
      {buttonText}
    </Button>
  );
}
