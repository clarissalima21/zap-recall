import { useState } from "react";
import styled from "styled-components";
import setaVirar from "../assets/seta_virar.png";
import setaPlay from "../assets/seta_play.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeErro from "../assets/icone_erro.png";

export default function Flashcard({ index, question, answer, onAnswer }) {
  const [step, setStep] = useState("question");
  const [status, setStatus] = useState(null);

  function handleAnswer(selectedStatus) {
    setStatus(selectedStatus);
    onAnswer();
    setStep("question");
  }

  function getIcon() {
    if (status === "correct") return iconeCerto;
    if (status === "almost") return iconeQuase;
    if (status === "incorrect") return iconeErro;
    return setaPlay; 
  }

  return (
    <Card step={step} onClick={() => step === "question" && !status && setStep("answer")}>
      {step === "question" && (
        <PerguntaContainer>
          <PerguntaTexto status={status}>Pergunta {index + 1}</PerguntaTexto>
          <img src={getIcon()} alt="Ícone de status" />
        </PerguntaContainer>
      )}

      {step === "answer" && !status && (
        <>
          <p>{question}</p>
          <ImageButton onClick={() => setStep("response")}>
            <img src={setaVirar} alt="Virar" />
          </ImageButton>
        </>
      )}

      {step === "response" && (
        <>
          <p>{answer}</p>
          <ButtonContainer>
            <Button color="red" onClick={() => handleAnswer("incorrect")}>
              Não lembrei
            </Button>
            <Button color="orange" onClick={() => handleAnswer("almost")}>
              Quase não lembrei
            </Button>
            <Button color="green" onClick={() => handleAnswer("correct")}>
              Zap!
            </Button>
          </ButtonContainer>
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  background: ${({ step }) => (step === "answer" ? "#ffea70" : "white")}; 
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-family: 'Recursive', sans-serif;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
`;

const PerguntaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: auto;
  }
`;

const PerguntaTexto = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-decoration: ${({ status }) => (status ? "line-through" : "none")};
  color: ${({ status }) =>
    status === "incorrect"
      ? "red"
      : status === "almost"
      ? "orange"
      : status === "correct"
      ? "green"
      : "black"};
`;

const ImageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;

  img {
    width: 20px;
    height: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Recursive', sans-serif;
  &:hover {
    opacity: 0.8;
  }
`;
