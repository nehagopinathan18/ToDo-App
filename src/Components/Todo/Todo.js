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
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            userInput: event.target.value
        });
        // console.log(this.state.userInput);

        
    }
    addItem(e) {
        e.preventDefault();
        var newItem = {
          text: this.state.userInput,
          createdDate: Date.now(),
        };
        let oldItems = this.state.items;
        oldItems.push(newItem);
    
        this.setState({
          items: oldItems,
        });
        // console.log(oldItems);
        // console.log(newItem);
    }
    deleteItem(createdDate) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.createdDate !== createdDate);
        });
       
        this.setState({
          items: filteredItems
        });
        console.log(filteredItems);
      }
    
    render() {
        return (
            <div>
                
                <img alt="todo-img" className="app-logo" src="https://image.freepik.com/free-vector/people-making-list-illustration_53876-64623.jpg" ></img>
                <h1 className="title">To-Do-LIST</h1>
                <div className="form-container">
                <form onSubmit={this.addItem}>
                    <input placeholder="Enter task" className="input-task" onChange={this.handleInputChange} value = {this.state.userInput}></input>
                    
                        <button type="submit" className="add-btn">ADD</button>
                </form>
                </div>
                <Todoitems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}
export default Todo;