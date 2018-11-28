import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AccountEmpty from './accountempty';
import AccountMange from './accountmange';
class Account extends Component{
   
              
    state={
        account:[],
     }  
     accountDetails =(accountId)=>{
        this.props.accountDetails(accountId);
     }  
    render(){
        let accounts =this.props.accountList.slice();
        if(accounts === null || accounts.length === this.state.account.length){}
         else{
         this.setState({account:accounts});
         }
         let lengthAccount = localStorage.getItem("Account");
         lengthAccount = JSON.parse(lengthAccount);
         if(lengthAccount === null){
             lengthAccount = 0;
         }
         console.log(lengthAccount);

        return (
            <div>
                <div className="section"></div>
                <div className="row">
                <div className="col s12 m8 offset-m2">
        <div className="card">
        <div className="card-content">
        <Link to="/" className="btn blue  btn-small left">Back to dashboard</Link>
            <Link to="/createNewAccount" className="btn  btn-small right blue btn-spac">add new account</Link>
           <br/>
            <h5 className="center-align">Account</h5>
            <div className="divider"></div>
           {lengthAccount === 0 ? 
         <AccountEmpty/>
         :
          <AccountMange accounts={this.state.account}  accountDetails={this.accountDetails} />
           }
            
        </div>
        </div>
        </div>
                </div>
              
            </div>
        );
    }
}


export default Account;