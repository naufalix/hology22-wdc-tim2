import React from 'react';
import Loading from '../components/Loading';
//import {Redirect} from 'react-router-dom';
import { Navigate } from 'react-router-dom';

class Compose extends React.Component{
  constructor(props){
    super(props);

    this.user    = null;
    this.loading = true;

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.firebase.auth.onAuthStateChanged(user => {
      this.loading = false;
      if(user){
        this.user = user;
      }
      this.forceUpdate();
    });
  }

  handleChange(event){
    //
  }
  
  handleSubmit(event){
    //
  }

  render(){
    if(!this.loading){
      if(this.user){
        return this.view();
      }else{
        return <Navigate to='/login' />
      }
    }

    return <Loading/>
  }

  view(){
    const {photoURL} = this.user;
    return (
      <div className="compose">
        <form onSubmit={this.handleSubmit}>
          <div className="compose-header"></div>
          <div className="compose-body">  
            <div className="compose-photo">
              <img src={photoURL} className="rounded" height="50" alt="Pic of you" />
            </div>
            <div className="compose-message">
              <textarea rows="5" placeholder="What's happening?" value={this.state.value} onChange={this.handleChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default Compose;