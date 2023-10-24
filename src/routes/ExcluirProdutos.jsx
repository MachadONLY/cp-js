import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ExcluirProduto() {

    // Recuperando o parâmetro ID com o HOOK useParams();
    document.title = "EXCLUIR PRODUTO";
    const { id } = useParams();
    const navigate = useNavigate();
    const [produto] = useState({
        id: id,
    });

    useEffect(() => {
        // Não é necessário buscar detalhes do produto para excluir.
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5173/produtos/${id}`, {
            method: "DELETE",
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Produto excluído com sucesso.");
                } else {
                    console.log("Falha ao excluir o produto.");
                }
            })
            .catch(error => console.log(error));

        // Redirecionar para a página de produtos após a exclusão.
        navigate("/produtos");
    }

    return (
        <div>
            <h1>EXCLUIR PRODUTO</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Excluir Produto</legend>
                        <div>
                            <p>Deseja realmente excluir o produto com ID {produto.id}?</p>
                        </div>
                        <div>
                            <button>EXCLUIR</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
