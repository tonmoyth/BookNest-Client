import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const MainLayout = () => {
    const {pathname} = useLocation();
    
    return (
        <div>
            {
                pathname === '/' ? '' : <Header></Header>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;