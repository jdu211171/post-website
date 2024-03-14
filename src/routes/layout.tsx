import {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Navbar from "@/components/navbar.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {userSession} from "@/contexts/UserSession.tsx";

const Layout = () => {
  const {session, isLoading} = userSession()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !session) {
      navigate('/login')
    }
  }, [isLoading, session, navigate])

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>
          <Sidebar/>
        </div>
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar/>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;