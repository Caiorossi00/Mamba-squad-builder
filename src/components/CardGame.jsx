import { useState, useEffect } from "react";
import Card from "./Card";
import InputCode from "./InputCode";
import jogadores from "../data/jogadores";
import "./CardGame.css";

const CardGame = () => {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards
      ? JSON.parse(storedCards)
      : [null, null, null, null, null];
  });
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleAddCard = () => {
    const codigoLower = codigo.toLowerCase();
    const jogador = jogadores.find(
      (jogador) => jogador.codigo.toLowerCase() === codigoLower
    );

    if (jogador) {
      const novoArray = [...cards];
      const indexVazio = novoArray.findIndex((card) => card === null);

      if (indexVazio !== -1) {
        novoArray[indexVazio] = jogador;
        setCards(novoArray);
        setCodigo("");
      } else {
        alert("Você já completou o seu time com 5 jogadores!");
      }
    } else {
      alert("Código inválido!");
    }
  };

  const handleRemoveCard = (index) => {
    const novoArray = [...cards];
    novoArray[index] = null;
    setCards(novoArray);
  };

  const totalNivelDePoder = cards.reduce((total, card) => {
    return card ? total + card.nivelDePoder : total;
  }, 0);

  return (
    <div className="card-game">
      <img
        src="https://www.mambashopping.com.br/cdn/shop/files/0321121_f058c11b-f927-4c20-85f5-6a404af95541_300x@2x.png?v=1708400379"
        alt=""
      />
      <h1>Squad Builder</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            jogador={card}
            onRemove={() => handleRemoveCard(index)}
          />
        ))}
      </div>
      <InputCode
        codigo={codigo}
        setCodigo={setCodigo}
        handleAddCard={handleAddCard}
      />
      <h3 className="total-points">Mamba points: {totalNivelDePoder}</h3>
    </div>
  );
};

export default CardGame;
