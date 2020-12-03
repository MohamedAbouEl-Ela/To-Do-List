import  React, { Component } from 'react';
import TodoItems from './components/TodoItem/TodoItem'
import AddItem from './components/AddItem/AddItem'

class App extends Component{

  state ={
    items : [
      {id:1,name:'Go TO Cinema !!'},
      {id:2,name:'Playing Football !!'},
      {id:3,name:'Studing !!'},
    ]
  }

  deleteitems = (index) => {
      let items = this.state.items
      items.splice(index,1)
      this.setState({items})
  }

  additems = (e) =>{
    e.id = Math.random;
    let items = this.state.items;
    items.push(e);
    this.setState({items})
    
  }


  render(){
    return (
      <div className="App container">
        <h1 className="text-center">To DO List</h1>
        <TodoItems items={this.state.items} deleteitems={this.deleteitems} />
        <AddItem additems={this.additems}/>
      </div>
    );
  }
}
export default App;
