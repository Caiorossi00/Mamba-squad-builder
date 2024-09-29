import "./Card.css";

const Card = ({ jogador, onRemove }) => {
  return (
    <div className="card">
      {jogador ? (
        <>
          <button className="remove-card" onClick={onRemove}>
            ✖
          </button>
          <img
            src={jogador.imagem}
            alt={jogador.nome}
            style={{ width: "100%", height: "80%", objectFit: "cover" }}
          />
        </>
      ) : (
        <span>Card Vazio</span>
      )}
    </div>
  );
};

export default Card;
