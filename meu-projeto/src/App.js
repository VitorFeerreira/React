import "./App.css";
// import { useState } from "react";
// import SeuNome from "./components/SeuNome";
// import Saudacao from "./components/Saudacao";
// import OutraLista from "./components/OutraLista";
// import Condicional from "./components/Condicional";
// import HelloWorld from "./components/HelloWorld";
// import SayMyName from "./components/SayMyName";
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
// import List from "./components/List";
// import Evento from "./components/Evento";
// import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
//modelo de comando de outros componentes.
/*    
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
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
