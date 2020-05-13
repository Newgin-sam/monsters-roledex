import React,{Component} from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { Search } from './component/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monsters : user}));
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value});
  }
  render(){

    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter( monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) );

    return (
        <div className="App">
          <h1>monsters roledex </h1>
          <Search placeholder='search monsters' handleChange={this.handleChange} />
         
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}
export default App;
