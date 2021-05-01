import React  from 'react';
import './Todoitems.css';

class Todoitems extends React.Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  delete(createdDate) {
    this.props.delete(createdDate);
  }
  createTasks(item) {
      return <div className="theList">
        <li key={item.createdDate}>{item.text}
        
        <img onClick={() => this.delete(item.createdDate)} className ="save-img" src="https://img.icons8.com/material-rounded/24/000000/delete-sign.png"/>
        
        </li>
        
      </div>
  }
  
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
      
      // console.log(todoEntries);
      return (
        <ul >
            {listItems}
        </ul>
      );
    }
  };
   
  export default Todoitems;