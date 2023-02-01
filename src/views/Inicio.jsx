import Product from '../components/Product'
import { productos } from '../data/productos'

export default function Inicio() {

  return (
    <>
      <h1 className='text-4xl font-black'>Inicio</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map((producto) => (
            <Product key={producto.id} producto={producto} />
          ))}
      </div>
    </>
  )
}
