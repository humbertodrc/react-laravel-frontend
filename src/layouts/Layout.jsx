import {Outlet} from "react-router-dom";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

export default function Layout() {
	const {modal} = useQuiosco();

	return (
		<>
			<div className="md:flex">
				<Sidebar />
				<main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-4">
					<Outlet />
				</main>
				<Summary />
			</div>
			<Modal isOpen={modal} style={customStyles}>
				<ModalProducto />
			</Modal>
		</>
	);
}
