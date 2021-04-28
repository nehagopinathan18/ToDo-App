import React from 'react';
import './Todo.css';
import Todoitems from '../Todoitems/Todoitems';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInput:"",
            items: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
    
    }
    handleInputChange(event) {
        this.setState({
            userInput: event.target.value
        });
        console.log(this.state.userInput);

        
    }
    addItem(e) {
        e.preventDefault();
           var newItem = {
                text: this.state.userInput,
                createdDate: Date.now()
            };
            
        this.setState((prevState) => {
            console.log(prevState);
            return { items: prevState.items.push(newItem) }
        });
    
        
        console.log(this.state.items);
     
        
       
    }
    
    render() {
        return (
            <div>
                <h1 className="title">To-Do-LIST</h1>
                <img alt="todo-img" className="app-logo" src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-64623.jpg" ></img>
                <div className="form-container">
                <form onSubmit={this.addItem}>
                    <input placeholder="Enter task" className="input-task" onChange={this.handleInputChange} value = {this.state.userInput}></input>
                    
                        <button type="submit" className="add-btn">Add</button>
                </form>
                </div>
                {/* <Todoitems entries={this.state.items}/> */}
            </div>
        );
    }
}
export default Todo;