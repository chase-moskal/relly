
# relly — easy relative sizing for the web

### [→ relly demo page ←](https://chasemoskal.com/relly/)

## download/install relly

- **install it into your hip project**
	- install it — `npm install relly`
	- import it — `import * as relly from "relly"`
	- use styles and other stuff in `node_modules/relly/dist/`
- **geezer mode: direct downloads and html tags**
	- download directly (save-as)
		- [*relly.global.bundle.js*](https://github.com/chase-moskal/relly/raw/gh-pages/dist/relly.global.bundle.js) — make "relly" object globally available
		- [*relly.css*](https://github.com/chase-moskal/relly/raw/gh-pages/dist/relly.css) — css stylesheet has handy prefab classes
		- [*relly.scss*](https://github.com/chase-moskal/relly/raw/gh-pages/source/relly.scss) — mixins if you use sass
	- place your html tags
		- `<script src="node_modules/relly/dist/relly.global.bundle.js"></script>`
		- `<link rel="stylesheet" href="node_modules/relly/dist/relly.css"/>`

## relly→**reltext**

- a bit of javascript which sets the font size of an element relative to 
the element's height

	```js
	// just call reltext
	relly.reltext()

	// alternatively: you can pass parameters, here's an example with the defaults
	const elements = document.querySelectorAll(".relly-reltext")
	const fraction = 5 / 100 // font-size 1em becomes 5% of each element's height
	relly.reltext({elements, fraction})
	```

## relly→**aspectbox**

- use prefab css classes
	```html
	<link rel="stylesheet" href="node_modules/relly/dist/relly.css"/>

	<div class="mydiv relly-aspectbox-16-9 relly-reltext">
		reltext inside an aspectbox
	</div>
	```

- use sass mixins
	```scss
	@import "node_modules/relly/dist/relly.scss";

	.mydiv {
		@include relly-aspectbox(16, 9)
	}
	```
