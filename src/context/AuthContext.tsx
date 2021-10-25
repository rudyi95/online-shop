import React, { createContext, useCallback, useEffect, useState } from "react";

type TAuthContext = {
  token: Nullable<string>;
  userId: Nullable<string>;
  login: Function;
  logout: Function;
  isAuth: boolean;
};

const storageName = "userData";

export const AuthContext = createContext<TAuthContext>({
  token: "",
  userId: "",
  login: () => {},
  logout: () => {},
  isAuth: false,
});

export const AuthContextProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState<Nullable<string>>(null);
  const [userId, setUserId] = useState<Nullable<string>>(null);

  const isAuth = !!token;

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName) || "{}");

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
