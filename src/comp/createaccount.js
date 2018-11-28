import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
class CreateNewAccount extends Component {
     state = {
            isSubmitted: false,
            newAccountID: 0,

        }
    handleSubmit =()=>{
        
        let name = this.refs.name.value.trim();
        let type = this.refs.type.value.trim();
        let deposit = Number( this.refs.deposit.value );
        let accountID = new Date().getTime();
        let transactionId =accountID;
        let description = "Initial Deposit";
        let date = new Date();
        let fullDate =`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
        this.props.createAccount(accountID, name,type,deposit,fullDate);
        this.props.accountDetails(accountID);
        this.props.transactionCreate(transactionId,fullDate,accountID,type,deposit,description)
        this.setState({ isSubmitted: true, newAccountID: accountID });
    
}
    render() {
      
        return (
            <div>
                 { this.state.isSubmitted && ( <Redirect to={`/accountdetails/display/${this.state.newAccountID}`}/> )}   

                <div className="section"></div>
                <form method="post" onSubmit={ this.handleSubmit}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <div className="card">
                            <h4 className="teal lighten-2 center-align white-text title-from">Enter account details below</h4>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s3">
                                        <h6>Full Name</h6>
                                    </div>
                                    <div className="col s9  ">
                                        <input placeholder="Enter full Name here" type="text"ref="name" required />
                                    </div>

                                </div>
                                <div className="divider"></div>
                                <div className="section"></div>
                                <div className="row">
                                    <div className="col s3">
                                        <h6>Account Type*</h6>
                                    </div>
                                    <div className="col s3">
                                        <select ref="type" className="browser-default">
                                            <option value="" disabled>Choose your option</option>
                                            <option value="current">current</option>
                                            <option value="savings">savings</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="row">

                                    <div className="col s3">
                                        <h6>Initial Deposit in Rs</h6>
                                    </div>
                                    <div className="col s9  ">
                                        <input placeholder="1000" type="number" min="1000" max="50000" ref="deposit"  required />
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="section"></div>
                                <div className="row">
                                    <div className="col s3">
                                        <input  type="submit" className="btn blue btn-size " value="Create Account"/>
                                    </div>
                                    <div className="col s4 offset-s4">
                                        <Link to="/account" className="btn btn-size blue">view all Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>


        );
    }

}
export default CreateNewAccount;