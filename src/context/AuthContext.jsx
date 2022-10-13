import { useContext } from "react";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
let AuthContext = createContext({});
let AuthContextProvider = ({ children }) => {
  let [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <AuthContext.Provider value={{ loading, error, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export let useAuthContext = () => useContext(AuthContext);
export default AuthContextProvider;
