import "./App.css";
import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";
// import OutraLista from "./components/OutraLista";
// import Condicional from "./components/Condicional";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
// import List from "./components/List";
// import Evento from "./components/Evento";
// import Form from "./components/Form";
function App() {
  const[nome, setNome] = useState();
  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
//modelo de comando de outros componentes.
/*    
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      <Condicional />
      <Frase />
      <Evento />
      <Form />
      <HelloWorld />
      <SayMyName nome="Vitor" />
      <SayMyName nome="Bruno" />
      <SayMyName nome={nome} />
      <Pessoa nome="Vitor" idade="29" profissao="Programador" foto="https://placehold.co/150x150"/>
      <List />  */