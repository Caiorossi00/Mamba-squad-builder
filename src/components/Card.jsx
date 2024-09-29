import "./Card.css";

const Card = ({ jogador }) => {
  return (
    <div className="card">
      {jogador ? (
        <>
          <img src={jogador.imagem} alt={jogador.nome} />
        </>
      ) : (
        <span>???</span>
      )}
    </div>
  );
};

export default Card;
