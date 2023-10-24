import { Route, Routes } from 'react-router-dom';

// ... outras importações ...

export default function App() {
  return (
    <div>
      {/* ... suas outras rotas ... */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        {/* ... outras rotas ... */}
        
        {/* Esta rota corresponderá a qualquer URL desconhecida (erro 404) */}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </div>
  );
}
