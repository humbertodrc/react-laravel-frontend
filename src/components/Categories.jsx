import React from "react";

export default function Categories({categoria}) {
	const {icono, nombre} = categoria;

	return (
		<div>
			{nombre} {icono}
		</div>
	);
}
