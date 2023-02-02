import React from "react";
import { formatearDinero } from '../helpers';

export default function Product({producto}) {
	const {nombre, imagen, precio} = producto;

	return (
		<div className="w-full flex flex-col  border p-3 bg-white shadow">
			<img
				className="w-full"
				src={`/img/${imagen}.jpg`}
				alt={`imagen ${nombre}`}
			/>
			<div className="w-full h-full p-5 flex flex-col  justify-between gap-y-5">
				<h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        
        <button type='button' className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'>
          Agregar
        </button>
			</div>
		</div>
	);
}
