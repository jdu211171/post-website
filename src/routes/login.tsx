import {userSession} from "@/contexts/UserSession.tsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const {signIn} = userSession()
  const navigate = useNavigate()
  useEffect(() => {
    signIn()
      .then(() => navigate('/'))
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">Logging in...
    </div>
  );
}