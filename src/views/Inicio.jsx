import Product from "../components/Product";
import {productos as data} from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";

export default function Inicio() {
	const {categoriaActual} = useQuiosco();

	const productos = data.filter(
		(producto) => producto.categoria_id === categoriaActual.id
	);

	return (
		<>
			<h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
			<p className="text-2xl my-10">
				Elige y personaliza tu pedido a continuación
			</p>

			<div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{productos.map((producto) => (
					<Product key={producto.id} producto={producto} />
				))}
			</div>
		</>
	);
}
