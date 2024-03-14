import React from 'react';
import {UserSessionType} from "@/lib/TopicType.ts";
import {useLocalStorage} from "@/lib/useLocalStorage.ts";

const AuthContext = React.createContext<{
  signIn: () => Promise<void>;
  signOut: () => void;
  session: UserSessionType | null;
  isLoading: boolean;
}>({
  signIn: async () => {
  },
  signOut: () => {
  },
  session: null,
  isLoading: true,
});

export function userSession() {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error('userSession must be wrapped in a <SessionProvider />');
  }
  return value;
}

export function SessionProvider(props: React.PropsWithChildren<{}>) {
  const [[isLoading, session], setSession] = useLocalStorage<UserSessionType>('session')
  const signIn = async () => {
    try {
      const response = await fetch(
        'https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/user/create',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
        },
      );
      const result = await response.json();
      localStorage.setItem('token', result.token);
      setSession(result);
    } catch (error) {
      console.error('SignIn failed:', error);
    }
  };
  const signOut = () => {
    setSession(null);
  };
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}