
function applyRelativeFontSize(element: HTMLElement, fraction: number) {
	const height = element.clientHeight
	element.style.fontSize = (height * fraction) + "px"
}

export default function reltext(

	elements: HTMLElement[] | NodeListOf<HTMLElement>
		= document.querySelectorAll<HTMLElement>(".reltext"),

	fraction = 5 / 100

) {
	elements = Array.from(elements)
	const listeners = []

	for (const element of elements) {
		const listener = (event) => applyRelativeFontSize(element, fraction)
		listeners.push(listener)
		window.addEventListener("resize", listener)
		applyRelativeFontSize(element, fraction)
	}

	return function dispose() {
		for (const listener of listeners) {
			window.removeEventListener("resize", listener)
		}
	}
}
