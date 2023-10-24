import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AdicionarProduto() {

    document.title = "ADICIONAR PRODUTO";
    const navigate = useNavigate();
    const [produto, setProduto] = useState({
      nome: '',
      desc: '',
      preco: ''
    });
     
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProduto({ ...produto, [name]: value });
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:5173/produtos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      })
      .then(response => {
        if (response.status === 201) {
          console.log("Produto adicionado com sucesso.");
        } else {
          console.log("Falha ao adicionar o produto.");
        }
      })
      .catch(error => console.log(error));

      navigate("/produtos");
    }

  return (
    <div>
      <h1>ADICIONAR PRODUTO</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Novo Produto</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto" value={produto.nome} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto" value={produto.desc} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="idPreco">Valor</label>
              <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto" value={produto.preco} onChange={handleChange}/>
            </div>
            <div>
              <button>ADICIONAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
