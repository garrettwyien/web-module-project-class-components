import React from 'react';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

const toDoItems = [
  {
    name: 'do homework',
    id: 0,
    done: false,
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems
    }
  }

  handleAddItem = (name) => {
    const newItem = {
      name: name,
      id: Date.now(),
      done: false,
    }
    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      toDoItems: this.state.toDoItems.filter(item=>{
        return(item.done === false)
      })
    });
  };
  handleDone = (id)=> {
    this.setState({
      toDo: this.state.toDoItems.map(item => {
        if (item.id === id) {
          return({
            ...item,
            done: !item.done
          });
        }
        return item;
      })
    });
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h1>Todo List: MVP</h1>
        <div>
          <ToDoList handleDone={this.handleDone} handleClear={this.handleClear} toDoItems={this.state.toDoItems}/> 
        </div>
        <div>
          <ToDoForm handleAddItem={this.handleAddItem} />
        </div>
      </div>
    );
  }
};

export default App;
