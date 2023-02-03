import useQuiosco from '../hooks/useQuiosco';

export default function Categories({categoria}) {
	const { icono, nombre, id } = categoria;
	
	const {handleClickCategoria} = useQuiosco()

	return (
		<div  className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
			<img
				src={`/img/icono_${icono}.svg`}
				alt={`imagen icono ${nombre}`}
				className="w-12"
			/>
			<button
				onClick={() => handleClickCategoria(nombre)}
				className="text-lg font-bold cursor-pointer truncate"
			>
				{nombre}
			</button>
		</div>
	);
}
