import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RightPane extends Component{
    constructor(props){
        super(props);
        this.props.totalTransaction();
    }
    render(){
       
        return (
            <div>
            
               
    
    <div className="col s12 m4 ">
    
    <div className="card ">
    <div className="card-action">
    <span className="size">Transaction</span>
    <Link to="/transactions" className="btn  btn-small right blue">view all</Link>
    <div className="divider"></div>
      </div>
      <div className="card-content center-align">
      <Link to="/transactions" className="card-size ">{`${this.props.lengthTransaction}`}<br/>Transaction</Link>
      </div>
      
     
    </div>
  </div>
  </div>
          
    
        );
    }
}

export default RightPane;