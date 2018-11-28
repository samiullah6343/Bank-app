import React, { Component } from 'react';

import {Link,Redirect} from 'react-router-dom';
class AccountDetails extends Component{
    constructor(props){
        super(props);
        let  currentAccountDetails = localStorage.getItem("AccountDetails");
        currentAccountDetails = JSON.parse(currentAccountDetails);
        this.props.currentaccountDetails(currentAccountDetails.id);
    }
        state ={
            accountDetails:[],
            isAccount:false,
            isSetTargetAccountDeposit:false,
            isSetTargetAccountWithDraw:false,
        }
        deleteAccount =()=>{
            this.props.deleteAccount(this.state.accountDetails.id);
            this.setState({ isAccount:true});
        }
        getAccount =(value)=>{
            const currentAccount =this.state.accountDetails;
            this.props.targetAccount(currentAccount);
            if(value === "deposit"){
            this.setState({isSetTargetAccountDeposit:true});
            }
            if(value === "withdraw"){
            this.setState({isSetTargetAccountWithDraw:true});
            }
        }
    render(){
       
                const details = this.props.accountDetails;
                if(details === null || details.id === this.state.accountDetails.id){}
                else{
                    this.setState({accountDetails:details});
                }
                               
             
                                

        return (
            <div>
              
                {this.state.isAccount && (<Redirect to="/account" />)}
                {this.state.isSetTargetAccountDeposit && (<Redirect to={`/deposit/${this.state.accountDetails.id}`} />)}
                {this.state.isSetTargetAccountWithDraw && (<Redirect to={`/withdraw/${this.state.accountDetails.id}`} />)}
                   
                <div className="section"></div>
                <div className="row">
                <div className="col m8 offset-m2">
                <div className="card">
                <div className="card-content">
                <Link to="/account" className="btn btn-small blue">Back to Account</Link>
                <div className="row">
                <div className="col s4">
                <h5>Account Details</h5>
                </div>
                <div className="col s3 offset-s5">
                <h6 to="/account" className="btn blue" onClick={this.deleteAccount}>Delete Account</h6>
                </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Account#</h6></div>
                <div className="col s9"><h6>{this.state.accountDetails.id}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Full Name</h6></div>
                <div className="col s9"><h6>{this.state.accountDetails.name}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Registered</h6></div>
                <div className="col s9"><h6>{this.state.accountDetails.fullDate}</h6></div>
                </div>
                <div className="divider"></div>
                <div className="row">
                <div className="col s3"><h6>Account Type</h6></div>
                <div className="col s9"><h6>{this.state.accountDetails.type}</h6></div>
                </div>
                <div className="divider"></div>
                <br/>
                <div className="row">
                <div className="col s3"><h6>Current Balance</h6></div>
                <div className="col s5"><h6>{this.state.accountDetails.deposit}</h6></div>
                <div className="col s4">
                <h6 className="btn blue btn-spac" onClick={()=>{this.getAccount("deposit")}}>Deposit</h6>
                <h6 className="btn blue btn-spac" onClick={()=>{this.getAccount("withdraw")}}>withDraw</h6>
                
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}


export default AccountDetails;