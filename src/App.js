import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {id: "asdasd12",name: "Taresh", age: 22},
      {id: "gggg11",name: "Amandia", age: 23}
    ],
    toggleChange : false
  }

  swithName = (newName) =>{
    // console.log('changed');
    this.setState({
      person:[
        {name: newName, age:21},
        {name:"Sakshi", age:24}
      ]  
    })
  }

  changedName = (event, id) => {
    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    });
    const person ={
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({person: persons})
  }

  toggleChange = () =>{
    const currentSituation = this.state.toggleChange;
    this.setState({
      toggleChange : !currentSituation
    })
  }

  deleteHandler = (personIndex) =>{
    // const persons = this.state.person;
    // const persons = this.state.person.slice();
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({
      person : persons
    })
  }

  render(){
    const style={
      backgroundColor: 'white',
      padding: '10px',
      border: '1px solid red'
    }

    let persons = null;
    if(this.state.toggleChange){
          persons =(
            <div>
               {this.state.person.map((person,index) => {
                 return <Person
                  click={()=>this.deleteHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event)=>this.changedName(event, person.id)}
                 />
               }

               )}
            </div>
          ); 
    }


    return (
      <div className="App">
        <h1>Main App.js</h1>
        <button 
        style={style}
        onClick={this.toggleChange}>Change</button>        
          {persons}
      </div>
    );
  }
}

export default App;
