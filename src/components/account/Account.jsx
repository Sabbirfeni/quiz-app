import classNames from '../account/Account.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Account() {
    const { currentUser, logout } = useAuth();

    return (
        <div className={classNames.account}>
            { currentUser ? 
            <>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <span>{currentUser.displayName}</span>
                <span onClick={logout}>Logout</span>
                {/* <span className='material-icons-outlined' title='Logout'>
                    {" "}
                    logout{" "}
                </span> */}
            </> : 
            <>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
            </>
            }
        </div>
    )
}