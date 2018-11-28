import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AccountEmpty extends Component{


    render(){

        return (
            <div>
                <div className=" center-align">
              <h4 className="red-text">There are currently no accounts available.</h4> 
                <Link to="/createNewAccount" className="btn blue">Creat New Account</Link>
            </div>
            <div className="section"></div>
             </div>

        );
    }
}
export default AccountEmpty;