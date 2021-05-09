import React from 'react';
import styled from 'styled-components'



const MainContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
 vertical-align: middle;
border: 1px solid  gray;
width:60%;
margin-left:50vh;
`
const ContainerMensagem = styled.div`
display:flex;
width:100%;
top: 0;
margin-top: 6px;
height: 90vh;
flex-direction: column-reverse;
align-items: flex-start;
padding: 5px;

`

const BoxEnvio = styled.div`
display: flex;
padding:10px;
border: 1px solid  gray;
width:60%;
padding:5px;
`

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

  adicionaMensagem = (event) => {
    event.preventDefault()
    const novoPost = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    const novaMensagem = [novoPost, ...this.state.post];

    this.setState({ post: novaMensagem,  valorInputUsuario:"",
    valorInputMensagem:""});

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
      
     <p className="novaMensagem">
        <b>
      {post.usuario}</b><br></br>   &nbsp;&nbsp;
      {post.mensagem}

     </p> 
        
       
    )
  })
    
    return (
      <MainContainer>
        
        <ContainerMensagem>
           {listaDePostagem}
       </ContainerMensagem>
       
         <form onSubmit={this.adicionaMensagem}>
        <input   id="user"  
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
       />
       <input id="msg"
         value={this.state.valorInputMensagem}
         onChange={this.onChangeInputMensagem}
         placeholder={"Mensagem"}
       />
       <button type={"submit"}>Enviar</button>
       </form>
       
      </MainContainer>
       
        
             
      
    );
  }
}
export default Mensagem

