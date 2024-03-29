import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// para importar o icon depois de instalar a biblioteca

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id)
  }

  const propsFavorito = {
    size: 30,
    onClick: favoritar
  }
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={30}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color='#ff0000'/>
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
