import { createContext } from "react";

// interface Auth {
//   isLoggedIn: boolean;
//   userId: string | boolean | null;
//   token: string | boolean | null;
//   login: (uid: any, token: any, expirationDate: any) => void;
//   logout: () => void;
// }

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
});
