import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TransactionMange from './transactionmange';
import TransactionEmpty from './transactionsempty';
class Transaction extends Component{
    state={
        transactions:[],
     }  
     transactionDetails =(transactionId)=>{
        this.props.transactionDetails(transactionId);
     } 
    render(){
        let transactions =this.props.transactionsList.slice();
        if(transactions === null || transactions.length === this.state.transactions.length){}
         else{
         this.setState({transactions:transactions});
         }
         let lengthOfTransaction = localStorage.getItem("Transaction");
         lengthOfTransaction = JSON.parse(lengthOfTransaction);
         if(lengthOfTransaction === null){
            lengthOfTransaction = 0;
         }
        return (
            <div>
             <div className="section"></div>
                <div className="row">
                <div className="col s12 m8 offset-m2">
        <div className="card">
        <div className="card-content">
        <Link to="/" className="btn blue darken-2  btn-small left">Back to dashboard</Link>
          
           <br/>
            <h5 className="center-align">Transactions</h5>
            <div className="divider"></div>
            {lengthOfTransaction === 0 
            ?
            <TransactionEmpty/>
            :
            <TransactionMange transactions={this.state.transactions} transactionDetails={this.transactionDetails} />
            }
            </div>

        </div>
        </div>
                </div>
              
            </div>
        );
    }
}

export default Transaction;