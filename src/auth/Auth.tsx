import { createContext } from 'react';

export const AuthContext = createContext<{
  status: string;
}>({ status: '' });

export const AuthUserProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider
      value={{
        status,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
