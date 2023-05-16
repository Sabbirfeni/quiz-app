import classNames from './RootLayout.module.css';
import Nav from '../navbar/Nav';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loader from '../Loader/Loader';
export default function RootLayout() {
    const { loading } = useAuth();

    return (
        <>
            <div className="App">
                <Nav/>
                <main className={classNames.main}>
                    <div className={classNames.container}>
                        { loading ? <Loader/> : <Outlet/>}

                    </div>
                </main>
            </div>
        </>
    )
}