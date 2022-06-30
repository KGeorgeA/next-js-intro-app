import type { NextPage } from 'next';
import { ChangeEventHandler, MouseEventHandler, useState } from 'react';

import CoreLayout from 'src/layouts/Core';

const SignInPage: NextPage = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    if (ev.currentTarget.id === 'email') {
      setEmailInput(ev.currentTarget.value);
    }

    if (ev.currentTarget.id === 'password') {
      setPasswordInput(ev.currentTarget.value);
    }
  }

  const handleSignIn: MouseEventHandler<HTMLButtonElement> = async (ev) => {
    ev.preventDefault();
    const res = await fetch('http://localhost:4000/api/auth/sign-in', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    });

    const { data } = await res.json();

    if (data.error) {
      return alert(`${data.error.message}`);
    }

    localStorage.setItem('access', data.token.access)
    localStorage.setItem('refresh', data.token.refresh)
    localStorage.setItem('userId', data.user.id)

  };

  return (
    <CoreLayout title="Sign In">
      <div>Sign In</div>
      <form method="POST">
        <input id="email" placeholder="email" onChange={handleInputChange}/>
        <input id="password" placeholder="password" onChange={handleInputChange}/>

        <button onClick={handleSignIn} type="submit">submit</button>
      </form>
    </CoreLayout>
  )
}

export default SignInPage;
