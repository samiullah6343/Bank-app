import React, { Component } from 'react';
import Headar from './comp/header';
import Footer from './comp/footer';
import Home from './comp/home';
import Account from './comp/account';
import Transaction from './comp/transactions';
import CreateNewAccount from './comp/createaccount';
import AccountDetails from './comp/accountdetails';
import WithDraw from './comp/withdraw';
import Deposit from './comp/deposit';
import TransactionDetails from './comp/transactiondetails';
import './materialize.css';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
class App extends Component {
 
  state = {
    account:[],
    transactions:[],
    accountdetails:[],
    transactiondetails:[],
    targetAccount:[],
    lengthAccount:0,
    lengthTransaction:0,
  }
   totalAccount =()=>{
    let account = localStorage.getItem("Account");
    account = JSON.parse(account);
    // console.log(account);
    if(account === null){
    }
    else{
    let lengthAccount = account.length;
    if (lengthAccount === 0 || lengthAccount=== this.state.lengthAccount){}
    else{
      this.setState({lengthAccount:lengthAccount});
    }
  }
}

  totalTransaction =()=>{
    let transaction =localStorage.getItem("Transaction");
    transaction=JSON.parse(transaction);
    if(transaction === null){
    }
    else{
       let lengthTransaction= transaction.length;
      
       if (lengthTransaction === 0 || lengthTransaction=== this.state.lengthTransaction){}
       else{
         this.setState({lengthTransaction:lengthTransaction});
       }
      }
  }
  createAccount = (accountID, name,type,deposit,fullDate)=>{
    let accounts = this.state.account.slice();
    const account = {id: accountID, name: name, type: type, deposit: deposit,fullDate:fullDate };
    accounts.push(account);
    this.setState({account:accounts});
    localStorage.setItem("Account",JSON.stringify(accounts));
  }
  accountDetails = (accountID) =>{
    // console.log(accountID);
    let accounts =localStorage.getItem("Account");
         accounts =JSON.parse(accounts);
    let accountLenght = accounts.length;
        for(let i = 0;i < accountLenght;i++ ){
              if(accountID === accounts[i].id){
                let account = accounts[i];
                if (account ===null || account.id=== this.state.accountdetails.id){}
                    else{
                   this.setState({accountdetails:account});
                   localStorage.setItem("AccountDetails",JSON.stringify(account));
                    }
                   break;
              }
             
        }
  }
  transactionDetails = (transactionId) =>{
    
    let transactions =localStorage.getItem("Transaction");
    transactions =JSON.parse(transactions);
    let transactionLenght = transactions.length;
        for(let i = 0;i < transactionLenght;i++ ){
              if(transactionId === transactions[i].transactionId){
                let transaction = transactions[i];
                // console.log(transactionId);
                if (transaction === null || transaction.transactionId=== this.state.transactiondetails.transactionId){}
                    else{
                   this.setState({transactiondetails:transaction});
                  localStorage.setItem("TransactionDetails",JSON.stringify(transaction));
                    }
                   break;
              }
             
        }
  }
  deleteAccount = (accountID)=>{
    let accounts =this.state.account.slice();
    let accountLength =accounts.length;
    for(let i= 0;i < accountLength;i++){
      if(accountID === accounts[i].id){
        accounts.splice(i,1);
        this.setState({account:accounts});
        localStorage.setItem('Account',JSON.stringify(accounts));
        break;
      }

    }
    // console.log(accounts);
    // console.log(accountLength);    
    // console.log(accountID);    
  }
  transactionCreate =(transactionId,fullDate,accountID,type,deposit,description)=>{
    let transaction = this.state.transactions.slice();
    const transactionAdd = {transactionId: transactionId, fullDate: fullDate, accountID: accountID,type: type, deposit: deposit,description:description };
    transaction.push(transactionAdd);
    this.setState({transactions:transaction});
    localStorage.setItem("Transaction",JSON.stringify(transaction));
  }
  updateAmount=(updateAccount)=>{
    let accounts =this.state.account.slice();
    for(let i= 0;i < accounts.length;i++){
      if(updateAccount.id === accounts[i].id){
        accounts[i] = updateAccount;
        this.setState({account:accounts});
        localStorage.setItem('Account',JSON.stringify(accounts));
                  break;
              }
            }
  }
  targetAccount =(currentAccount)=>{
    // console.log(currentAccount);
    if (currentAccount ===null || currentAccount.id=== this.state.targetAccount.id){}
    else{
    this.setState({targetAccount:currentAccount});
    localStorage.setItem("TargetAccount",JSON.stringify(currentAccount));
   }
  }
  render() {
    let account = localStorage.getItem("Account");
   account = JSON.parse(account);
   if (account ===null || account.length === this.state.account.length){}
   else{
   this.setState({account:account});
  }
   let transactions = localStorage.getItem("Transaction");
   transactions = JSON.parse(transactions);
   if (transactions ===null || transactions.length === this.state.transactions.length){}
   else{
   this.setState({transactions:transactions});
   }
  //  let currentAccountDetails= localStorage.getItem("AccountDetails");
  //  currentAccountDetails =JSON.parse(currentAccountDetails);
  //  if(currentAccountDetails === null || currentAccountDetails.id === this.state.accountDetails.id){}
  //  else{
  //    this.setState({accountDetails:currentAccountDetails});
  //  }
    return (
      <BrowserRouter>
      <div>
        
        <Headar/>
          <Switch>
           <Route path="/account" render={()=>(<Account accountList ={this.state.account} accountDetails={this.accountDetails}  />)}/>
           <Route path="/transactions" render={()=>(<Transaction transactionsList={this.state.transactions} transactionDetails={this.transactionDetails}  />)} />
    <Route path="/createNewAccount" render ={ ()=>(<CreateNewAccount
     createAccount={this.createAccount}
     accountDetails={this.accountDetails}
     transactionCreate ={this.transactionCreate}
     /> )}/>
            <Route path="/accountDetails/:id" render={()=>(<AccountDetails
            lengthAccount={this.state.lengthAccount}
             accountDetails={this.state.accountdetails}
             deleteAccount ={this.deleteAccount}
             updateAmount={this.updateAmount}
             targetAccount ={this.targetAccount}
             currentaccountDetails={this.accountDetails}
             />)} />
             <Route path="/transactiondetails/:id" render={()=>(<TransactionDetails 
             transactionDetails={this.state.transactiondetails}
             currentTransactionDetails ={this.transactionDetails}
             />)}
             />
              <Route path="/withDraw" render={()=>(<WithDraw
               targetAccount={this.state.targetAccount}
               currentTragetAccount={this.targetAccount}
               updateAmount={this.updateAmount}
               accountDetails={this.accountDetails}
               transactionCreate={this.transactionCreate}
              />)}/>
            <Route path="/deposit/:id" render={()=>(<Deposit
             targetAccount={this.state.targetAccount}
             currentTragetAccount={this.targetAccount}
             updateAmount={this.updateAmount}
             accountDetails={this.accountDetails}
             transactionCreate={this.transactionCreate}
             /> )}/>
           <Route exact path="/" render={()=>(<Home 
           totalAccount={this.totalAccount}
           lengthAccount={this.state.lengthAccount}
            totalTransaction={this.totalTransaction} 
            lengthTransaction={this.state.lengthTransaction} 
             />)}/> 
           
           
          </Switch>
      
        <Footer/>
    </div>
    </BrowserRouter>
    );
    
  }
}

export default App;
