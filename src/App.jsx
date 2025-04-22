import { useState } from "react";
import styled from "styled-components";
import Flashcard from "./components/Flashcard";
import logo from "./assets/logo.png";

const flashcards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function App() {
  const [answered, setAnswered] = useState(0);

  return (
    <Container>
      {/* Área do título e logo */}
      <Header>
        <img src={logo} alt="Logo do ZapRecall" />
        <h1>ZapRecall</h1>
      </Header>

      {/* Flashcards */}
      {flashcards.map((card, index) => (
        <Flashcard
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          onAnswer={() => setAnswered(answered + 1)}
        />
      ))}
      <p>{answered}/{flashcards.length} CONCLUÍDOS</p>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ff6666;
  min-height: 100vh;
  font-family: 'Recursive', sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 50px;
    height: auto;
  }

   h1 {
    color: white;
    font-family: 'Righteous', cursive;
    font-size: 3rem;
    font-weight: 400;
  }
`;





