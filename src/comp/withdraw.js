import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
class WithDraw extends Component{
    constructor(props){
        super(props);
        let  currentAccount = localStorage.getItem("TargetAccount");
        currentAccount = JSON.parse(currentAccount);
        this.props.currentTragetAccount(currentAccount);
    }
    state ={
        targetAccount:[],
        isSubmit:false,
    }
    updateWithdaraw=()=>{
        let currentTargetAccount =this.state.targetAccount;
        let value =Number(currentTargetAccount.deposit);
        let depositCurrentValue = Number(this.refs.withDrawValue.value);
        let description = this.refs.description.value;
            let updateValue = value - depositCurrentValue;
            currentTargetAccount.deposit = updateValue;
            // console.log(currentTargetAccount);
            this.props.updateAmount(currentTargetAccount);
            this.props.accountDetails(currentTargetAccount.id);
            let transactionId =new Date().getTime();
            let date = new Date();
            let fullDate =`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
            this.props.transactionCreate(transactionId,fullDate,currentTargetAccount.id,currentTargetAccount.type,depositCurrentValue,description);
            this.setState({isSubmit:true});
            // }
            // else{this.updateWithdaraw()}
    }

    render(){
        const currentAccountWithDraw = this.props.targetAccount;
        if(currentAccountWithDraw === null || currentAccountWithDraw.id === this.state.targetAccount.id){}
        else{
            this.setState({targetAccount:currentAccountWithDraw});
        }
        return (
            <div>
                <div className="section"></div>
                {this.state.isSubmit && (<Redirect to={`/accountdetails/${this.state.targetAccount.id}`} />)}
               
                <form method="post" onSubmit={this.updateWithdaraw}>
<div className="row">
    <div className="col s12 m8 offset-m2">
        <div className="card">
            <h4 className="teal lighten-2 center-align white-text title-from">WithDraw into account</h4>
            <div className="card-content">
                <div className="row">
                    <div className="col s3">
                        <h6>Amount to Deposit*</h6>
                    </div>

                    <div className="col s9  ">
                        <input placeholder="maximum RS 100" type="number" min="100" max={this.state.targetAccount.deposit} ref="withDrawValue" />
                    </div>

                </div>
                <div className="divider"></div>
                <div className="section"></div>
                <div className="row">
                    <div className="col s3">
                        <h6>Description (optional)</h6>
                    </div>
                    <div className="col s9  ">
                        <input placeholder="Description of trancations" type="text"ref="description" value="withdraw" required />
                    </div>

                </div>
                <div className="divider"></div>
                <div className="section"></div>
                <div className="row">
            
                                    <div className="col s4">
                                    <input  type="submit" className="btn blue btn-size " value="WithDraw"/>
                                    </div>
                                    <div className="col s4">
                                        <Link to={`/accountdetails/${this.state.targetAccount.id}`} className="btn blue btn-size">cancel</Link>
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


export default WithDraw;