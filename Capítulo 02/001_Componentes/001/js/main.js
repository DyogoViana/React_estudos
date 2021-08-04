import "./styles.css";

function Header() {
	return React.createElement(
		"header",
		{ class: "topo" },
		React.createElement("h1", { className: "logo" }, "Editora MaujorTec")
	);
}

function Principal() {
	return React.createElement(
		"div",
		{ className: "principal" },
		"Coluna principal"
	);
}

function Navegacao() {
	return React.createElement(
		"div",
		{ className: "navegacao" },
		"Coluna de navegação"
	);
}

function Topo() {
	return React.createElement(
		"div",
		{ className: "c-topo" },
		Header(),
		Navegacao()
	);
}

function Rodape() {
	return React.createElement(
		"footer",
		{ className: "rodape" },
		React.createElement("p", {}, "Rodapé")
	);
}

function App() {
	return React.createElement(React.Fragment, {}, Topo(), Principal(), Rodape());
}

ReactDOM.render(App(), document.getElementById("tudo"));
