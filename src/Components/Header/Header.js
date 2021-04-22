import React from 'react';
import './Header.css';
import Todo from './../Todo/Todo';


class Header extends React.Component{
     
    login = ({user}) => {
        // auth.signInWithPopup(provider) 
        //   .then((result) => {
            // const user = result.user;
            // this.setState({
            //   user: ""
            // });
        //   });
        console.log("clicked", user);
        return <Todo />
        
      }
    render() {
        return (
        <div>
            <h1 className="title">To-Do-LIST</h1>
            <img alt="todo-img" className="app-logo" src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-64623.jpg" ></img>
            {/* {this.state.user ?
    <button className="sign-in-btn" onClick={this.logout}>Log Out</button>                
    :
    <button className="sign-in-btn" onClick={this.login}>Log In</button>              
  } */}
                <button className="sign-in-btn" onClick={this.login}>SignInWithGoogle</button>
        </div >
            
        );
    }
}



export default Header;