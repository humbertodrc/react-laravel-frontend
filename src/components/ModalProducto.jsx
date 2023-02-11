import {formatearDinero} from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function ModalProducto() {
	const {producto, handleClickModal} = useQuiosco();
	const {nombre, imagen, precio} = producto;
	return (
		<div className="md:flex gap-10">
			<div className="md:w-1/3">
				<img
					className="w-full"
					src={`/img/${imagen}.jpg`}
					alt={`imagen ${nombre}`}
				/>
			</div>
			<div className="md:w-2/3">
				<div className="flex justify-end">
					<button onClick={handleClickModal}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<h1 className="text-3xl font-bold mt-5">{nombre}</h1>
				<p className="mt-5 font-black text-5xl text-amber-500">
					{formatearDinero(precio)}
				</p>
				<button className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">Añadir al pedido</button>
			</div>
		</div>
	);
}
