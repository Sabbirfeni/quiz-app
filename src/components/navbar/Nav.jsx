import classNames from './Nav.module.css';

import Account from '../account/Account';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={classNames.nav}>
        <ul>
          <li>
            <Link to="/" className={classNames.brand}>
              <Logo/>
              <h3>Quiz Test</h3>
            </Link>
          </li>
        </ul>
        <Account/>
      </nav>
    )
}