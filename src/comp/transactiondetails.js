import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TransactionDetails extends Component{
      constructor(props){
          super(props);
          let transaction = localStorage.getItem("TransactionDetails");
          transaction = JSON.parse(transaction);
          this.props.currentTransactionDetails(transaction.transactionId);
      } 
      state={
          transactionDetails:[],
      }
    render(){
        const detailsTransaction = this.props.transactionDetails;
        if(detailsTransaction === null || detailsTransaction.transactionId === this.state.transactionDetails.transactionId){}
        else{
            this.setState({transactionDetails:detailsTransaction});
        }
        return (
            <div>
              
                <div className="section"></div>
                <div className="row">
                <div className="col m8 offset-m2">
                <div className="card">
                <div className="card-content">
                <Link to="/transactions" className="btn btn-small blue">Back to Transaction</Link>
                <div className="row">
                <div className="col s4">
                <h5>Transaction Details</h5>
                </div>
                
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Transaction ID</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.transactionId}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Time</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.fullDate}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Account #</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.accountID}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Type</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.type}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Amount</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.deposit}</h6></div>
                </div>
                <div className="divider"></div>

                <div className="row">
                <div className="col s3"><h6>Description</h6></div>
                <div className="col s9"><h6>{this.state.transactionDetails.description}</h6></div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}


export default TransactionDetails;