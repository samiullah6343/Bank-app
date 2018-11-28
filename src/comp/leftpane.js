import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LeftPane extends Component{
    constructor(props){
        super(props);
        this.props.totalAccount();
    }
    render(){
        
        return (
            <div>
                
               
    <div className="col s12 m4 offset-m2">
    
      <div className="card ">
      <div className="card-action">
      <span className="size ">Account</span>
            <Link to="/account" className="btn  btn-small right blue">view all</Link>
            <Link to="/createNewAccount" className="btn  btn-small right blue btn-spac">add new account</Link>
            <div className="divider"></div>
        </div>
        <div className="card-content center-align">
        <Link to="/account" className="card-size">{`${this.props.lengthAccount}`}<br/>Account</Link>
        </div>
        
       
      </div>
    </div>
    
          
            </div>
            
        );
    }
}

export default LeftPane;