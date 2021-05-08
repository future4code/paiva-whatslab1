import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 vertical-align: middle;

`
const ContainerMensagem = styled.div`
display:flex;
width:60%;
top: 0;
border: 1px solid  gray;
margin-top: 6px;
height: 600px;
flex-direction: column;
`

const BoxEnvio = styled.div`
display: flex;
padding:10px
border: 1px solid  gray;
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

  adicionaMensagem = () => {
    const novoPost = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };
    const novaMensagem = [...this.state.post, novoPost];

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
      
     <p>
        <span><b>
      {post.usuario}  </b></span>  {post.mensagem}

     </p> 
        
       




    )
  })
    
    return (
      <MainContainer>
        
        <ContainerMensagem>
           {listaDePostagem}
       </ContainerMensagem>
       <BoxEnvio>
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
       <button onClick={this.adicionaMensagem}>Enviar</button>
       </BoxEnvio>
      </MainContainer>
       
        
             
      
    );
  }
}
export default Mensagem

