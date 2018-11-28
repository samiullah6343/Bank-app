import React, { Component } from 'react';
import LeftPane from './leftpane';
import RightPane from './rightpane';

class Home extends Component{
    render(){
        return (
            <div>
                <div className="row">
                <div className="section"></div>
                <div className="section"></div>
                <LeftPane  totalAccount={this.props.totalAccount}  lengthAccount={this.props.lengthAccount}/>
              <RightPane totalTransaction={this.props.totalTransaction}   lengthTransaction={this.props.lengthTransaction} />  
            </div>
            </div>
        );
    }
}

export default Home;