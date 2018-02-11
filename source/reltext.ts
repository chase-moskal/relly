
function applyRelativeFontSize(element: HTMLElement, fraction: number = 1 / 10) {
	const height = element.clientHeight
	element.style.fontSize = (height * fraction) + "px"
}

export default function reltext(

	elements: HTMLElement[] | NodeListOf<HTMLElement>
		= document.querySelectorAll<HTMLElement>(".reltext"),

	fraction = 5 / 100

) {
	elements = Array.from(elements)

	for (const element of elements) {
		const listener = (event) => applyRelativeFontSize(element, fraction)

		window.addEventListener("resize", listener)
		applyRelativeFontSize(element, fraction)

		return function cleanup() {
			window.removeEventListener("resize", listener)
		}
	}
}
