import React from 'react';
import styled from 'styled-components'





class Mensagem extends React.Component {
  state={
    post:[
      {
      usuario: "",
      mensagem: "",
      }
    ],
  valorInputUsuario:"",
  valorInputMensagem:"",
  }

  adicionaMensagem = () => {
    const novoPost = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    const novaMensagem = [...this.state.post, novoPost];


    this.setState({ post: novaMensagem });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
 
  render (){
    const listaDePostagem = this.state.post.map((post)=>{
      
      return(
        
       

      <p>{post.Usuario}      {post.mensagem}</p>
    )
  })
    
    return (
      <div>
        {listaDePostagem}
        <div>
        <input     
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
       />
       <input
         value={this.state.valorInputmensagem}
         onChange={this.onChangeInputMensagem}
         placeholder={"Mensagem"}
       />
       <button onClick={this.adicionaMensagem}>Enviar</button>
        </div>
       
        </div>
             
      
    );
  }
}
export default Mensagem

