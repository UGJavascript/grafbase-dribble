import React, { useEffect, useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  return (
    <div>
      <p>AuthProviders</p>
    </div>
  );
};

export default AuthProviders;
