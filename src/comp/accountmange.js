import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AccountMange extends Component{
       
        accountId =(accountId)=>{
           this.props.accountDetails(accountId);
        }
    render(){

        return (
            <div>
            <table className="centered">
            <thead>
                <tr className="teal lighten-2 white-text centered">
                    <th>Account #</th>
                    <th>Name</th>
                    <th>Registered</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.accounts.map((account,index)=>{
                   return( <tr key ={index}>
                        <td><Link to={`/accountdetails/${account.id}`} onClick={()=>{this.accountId(account.id)}} >{account.id}</Link></td>
                        <td>{account.name}</td>
                        <td>{account.fullDate}</td>
                        <td>{account.type}</td>
                        <td>{account.deposit}</td>
                    </tr>
                    )})}
                </tbody>
            </table>

             </div>

        );
    }
}
export default AccountMange;