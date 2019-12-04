import React,{Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{
  state={
    todoToShow:"all",
    filter:"all",
    todos:[
      {id:1, content:'Find energon '},
      {id:2, content:'Defeat decepticons '}
    ]
  }

  deleteTodo=(id)=>{
    const todos= this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos, todo];
    this.setState({
      todos
    })

  }

  updateTodoToShow=(s)=>{
      this.setState({
          todoToShow:s
      })

  }
  render() {
    let todos = [];

    if (this.state.todoToShow === 'all'){
        todos= this.state.todos;
    }

    else if (this.state.todoToShow === 'remaining'){
       todos= this.state.todos.filter(todo=>!todo.complete);
    }

    else if (this.state.todoToShow === 'completed'){
        todos= this.state.todos.filter(todo=> todo.complete);
     }

    return (
      <div className="todo-app container">
        <h1 className="center pink-text">To-do List</h1>
        <p>Click to remove completed tasks</p>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>  

        <div>number of tasks left : {this.state.todos.filter(todo=> !todo.complete).length}
           </div>

        <div> <button onClick={()=>this.updateTodoToShow("all")}>all</button>
                <button onClick={()=>this.updateTodoToShow("remaining")}>remaining</button>
                <button onClick={()=>this.updateTodoToShow("completed")}>completed</button></div>



      </div>
    );
  }
}

export default App;
