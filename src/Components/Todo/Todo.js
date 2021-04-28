import React from 'react';
import './Todo.css';
import Todoitems from '../Todoitems/Todoitems';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
    
    }
    handleInputChange(event) {
        this.setState({
            items: event.target.value
        });
       
        
    }
    addItem(e) {
        if (this.state.items !== "") {
           var newItem = {
                text: this.state.items.value,
                key: Date.now()
            };
            
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this.setState(() => {
                return {
                    value: ""
                };
            });
        }
        alert("form submit", this.state.items);
        console.log(this.state.items);
     
        e.preventDefault();
       
    }
    
    render() {
        return (
            <div>
                <h1 className="title">To-Do-LIST</h1>
                <img alt="todo-img" className="app-logo" src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-64623.jpg" ></img>
                <div className="form-container">
                <form onSubmit={this.addItem}>
                    <input placeholder="Enter task" className="input-task" onChange={this.handleInputChange} value = {this.state.item}></input>
                    
                        <button type="submit" className="add-btn">Add</button>
                </form>
                </div>
                <Todoitems entries={this.state.items}/>
            </div>
        );
    }
}
export default Todo;