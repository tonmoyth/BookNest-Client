import { Outlet, useLocation, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Loading from "../Components/Loader/Loading";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  const { pathname } = useLocation();
  const { state } = useNavigation();
  console.log(state);

  return (
    <div>
      {pathname === "/" ? "" : <Header></Header>}
      <HelmetProvider>
        {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </HelmetProvider>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
