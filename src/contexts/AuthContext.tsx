import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

type User = {
  email: string;
  permissions: string[];
  roles: string[];
  theme: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  addUser: (data: User) => void;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

//let authChannel: BroadcastChannel

export function signOut() {
  destroyCookie(undefined, "nextauth.token");
  destroyCookie(undefined, "nextauth.refreshToken");

  //authChannel.postMessage('signOut');

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  function addUser(data: User) {
    setUser(data);
  }

  // useEffect(() => {
  //   authChannel = new BroadcastChannel('auth')

  //   authChannel.onmessage = (message) => {
  //     switch (message.data) {
  //       case 'signOut':
  //         signOut();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   const { "nextauth.token": token } = parseCookies();

  //   if (token) {
  //     api
  //       .get("/me")
  //       .then((response) => {
  //         const { email, permissions, roles } = response.data;

  //         setUser({ email, permissions, roles });
  //       })
  //       .catch(() => {
  //         signOut();
  //       });
  //   }
  // }, []);

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.get("auth", {
        headers: {
          user: email,
          password: password,
        },
      });

      if (response.status === 200) {
        const { authorization, refreshToken, permissions, roles } =
          response.data;

        if (authorization) {
          setCookie(undefined, "nextauth.token", authorization, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          });

          setCookie(undefined, "nextauth.refreshToken", refreshToken, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          });

          setUser({
            email,
            permissions,
            roles,
            theme: "dark",
          });
        }
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${authorization}`;

        Router.push("/home");
      } else {
        Router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ addUser, signIn, signOut, isAuthenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
