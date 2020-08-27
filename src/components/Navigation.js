import React from 'react';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import s from './Navigation.module.css';

const {getIsAuthenticated} = authSelectors;

export default function Navigation ({isAuthenticated}) {
    const isUserLogin = useSelector(getIsAuthenticated);

    return (
        <nav className={s.mainNavBox}>
            <NavLink 
                to="/"
                exact
                activeStyle={{color:"#656566"}} 
                className={s.mainNav}
            >Home
            </NavLink>
    
            {isUserLogin && 
                <NavLink 
                    to="/contacts"
                    activeStyle={{color:"#656566"}} 
                    className={s.mainNav}
                >Contacts
                </NavLink>
            }
        </nav>
    );
};



// const Navigation = ({isAuthenticated}) => (
//     <nav className={s.mainNavBox}>
//         <NavLink 
//             to="/"
//             exact
//             activeStyle={{color:"#656566"}} 
//             className={s.mainNav}
//         >Home
//         </NavLink>

//         {isAuthenticated && 
//             <NavLink 
//                 to="/contacts"
//                 activeStyle={{color:"#656566"}} 
//                 className={s.mainNav}
//             >Contacts
//             </NavLink>
//         }
//     </nav>
// );

// const mapStateToProps = (state) => ({
//     isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);