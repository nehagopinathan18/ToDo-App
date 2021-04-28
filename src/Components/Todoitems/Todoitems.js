import React  from 'react';
import './Todoitems.css';

class Todoitems extends React.Component {
    createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
      // console.log(todoEntries);
      return (
        <ul className="theList">
            {listItems}
        </ul>
      );
    }
  };
   
  export default Todoitems;