export default function relativeTextarea(node) {
	node.addEventListener("input", (event) => {
		node.style.height = "4px";
		node.style.height = 4 + event.target.scrollHeight + "px";
	});

	return {
		update(currentValue) {
			if (currentValue.trim() === "") {
				node.style.height = "52px";
			}
		},

		destroy() {
			node.removeEventListener("input", (event) => {
				node.style.height = "4px";
				node.style.height = 4 + event.target.scrollHeight + "px";
			});
		},
	};
}
