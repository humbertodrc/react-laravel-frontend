import { createContext, useState } from 'react';
import { categorias as categoriasDB } from "../data/categorias";

const QuioscoContext = createContext()

const QuioscoProvider = ({ children }) => {

  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0].nombre)

  const handleClickCategoria = (categoria) => {
    setCategoriaActual(categoria)
  }
  
  console.log("Me renderice")

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria
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