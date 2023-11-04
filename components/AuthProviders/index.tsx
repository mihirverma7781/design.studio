"use client";
import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

interface IProvider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, IProvider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: IProvider, index) => (
          <button key={index} onClick={() => signIn()}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }
};

export default AuthProviders;
