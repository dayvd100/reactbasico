import './App.css';
import { Component } from 'react';


class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        nome: "Dayvd Allyson",
        idade: 19
      },

      {
        id: 2,
        nome: "José da Silva",
        idade: 26
      },

      {
        id: 3,
        nome: "Pedro Costa",
        idade: 31
      }
    ]
  };

  render(){

    const {posts} = this.state;

    return(
    <div className='App'>
      {posts.map((post) =>
      <div>
       <h1 key={post.id}>{post.nome}</h1>
       <p>Idade: {post.idade}</p>
      </div>
       )}
      {posts.map((post) => console.log(post))}
    </div>)
  }
}

export default App;


