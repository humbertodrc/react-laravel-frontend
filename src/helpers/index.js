export const formatearDinero = (dinero) => {
	return new Intl.NumberFormat("es-AR", {
		style: "currency",
		currency: "ARS",
	}).format(dinero);
};

export const formatearDinero2 = (dinero) => {
	return dinero.toLocaleString("es-AR", {style: "currency", currency: "ARS"});
};
