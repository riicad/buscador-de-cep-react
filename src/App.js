import { FiSearch } from 'react-icons/fi';
import './App.css';
import { useState } from 'react';
import api from './services/api';

function App() {

  const[input, setInput] = useState('');
  const[cep, setCep] = useState({});

  async function handleSearch(){
    if (input===''){
      alert("O campo está vázio")
      return;
    }

    try
    {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }

    catch
    {
      alert("ops, algo deu errado!");
      setInput("")
    }

  }
  return (
    <div className="container">
      <h1 className='Title'>BUSCADOR CEP</h1>
      
      <div className='containerInput'>
        <input type='text'
        placeholder='Digite seu CEP'
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>
        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div> {/* end container input */}

      <main className='Main'>
        <h2>CEP: {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>

    </div> //end container
  );
}

export default App;
