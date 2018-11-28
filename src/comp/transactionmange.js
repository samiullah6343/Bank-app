import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TransactionManage extends Component{
    transactionId =(transactionId)=>{
        this.props.transactionDetails(transactionId);
     }

    render(){

        return (
            <div>
                <div className="section"></div>
<table className="centered">
            <thead>
                <tr className="teal lighten-2 white-text centered">
                    <th>Transaction ID</th>
                    <th>Time</th>
                    <th>Account #</th>
                    <th>Type</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.transactions.map(((transaction,index)=>{
                  return(  <tr key={index}>
                        <td><Link to={`/transactiondetails/${transaction.transactionId}`} onClick={()=>{this.transactionId(transaction.transactionId)}}>{transaction.transactionId}</Link></td>
                        <td>{transaction.fullDate}</td>
                        <td>{transaction.accountID}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.deposit}</td>
                    </tr>
                     ) }))}
                </tbody>
            </table>


                </div>

        );
    }
}
export default TransactionManage;