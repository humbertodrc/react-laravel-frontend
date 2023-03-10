import { createContext, useState } from 'react';
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0])
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);

  const handleClickCategoria = (id) => {
    const categoriaName = categorias.find((categoria) => categoria.id === id);
    setCategoriaActual(categoriaName);
  }
  
  const handleClickModal = () => {
    setModal(!modal)
  }

  const handleSetProducto = (producto) => {
    setProducto(producto)
  }

  const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
    setPedido([...pedido, producto])
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido
      }}
    >
      {children}
    </QuioscoContext.Provider>
    )
}

export {
  QuioscoProvider
};

export default QuioscoContext;