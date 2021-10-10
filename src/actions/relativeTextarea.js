export default function setTextareaHeight(node) {
	node.addEventListener("input", (event) => {
		node.style.height = "3px";
		node.style.height = 2 + event.target.scrollHeight + "px";
	});

	return {
		update(currentValue) {
			if (currentValue.trim() === "") {
				node.rows = 1;
				node.style.height = "52px";
			}
		},

		destroy() {
			node.removeEventListener("input", (event) => {
				node.style.height = "3px";
				node.style.height = 2 + event.target.scrollHeight + "px";
			});
		},
	};
}
