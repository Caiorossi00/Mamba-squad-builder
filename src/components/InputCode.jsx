import "./InputCode.css";

const InputCode = ({ codigo, setCodigo, handleAddCard }) => {
  return (
    <div className="input-code">
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Insira o código do jogador"
      />
      <button onClick={handleAddCard}>Adicionar Jogador</button>
    </div>
  );
};

export default InputCode;
