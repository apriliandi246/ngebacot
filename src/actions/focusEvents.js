import { scrollbarStatus, focusFormInputStatus } from "@store";

export default function setTextareaHeight(node) {
	node.addEventListener("focusin", () => {
		scrollbarStatus.update((currentValue) => (currentValue = "hide"));
		focusFormInputStatus.update((currentValue) => (currentValue = "focusIn"));
	});

	return {
		destroy() {
			node.removeEventListener("focusin", () => {
				scrollbarStatus.update((currentValue) => (currentValue = "hide"));
				focusFormInputStatus.update((currentValue) => (currentValue = "focusIn"));
			});
		},
	};
}
