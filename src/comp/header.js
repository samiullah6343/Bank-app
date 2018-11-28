import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <div>
                <nav className="black darken-2">
                    <div className="container">
                <div className="nav-wrapper">
                        <Link  className="size" to ="/">Bank</Link>
                        <ul className="right hide-on-med-and-down">
                                <li><Link to ="/">DashBoard</Link></li>
                                <li><Link to ="/account">Account</Link></li>
                                <li><Link to ="/transactions">Transactions</Link></li>
                            </ul>
                        </div>
                        </div>
                </nav>
            </div>
        );
    }
}

export default Header;