import React, { Component } from 'react';


class TransactionsEmpty extends Component{


    render(){

        return (
            <div>
            <div className="section"></div>
            <h5 className="red-text center-align">No transactions have been made yet.</h5>
            <div className="section"></div>
            </div>

        );
    }
}
export default TransactionsEmpty;