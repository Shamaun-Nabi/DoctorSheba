import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../firbase.init";

export default function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  console.log();
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (!user.emailVerified) {
  //   return <Reviews />;
  // }

  return children;
}
