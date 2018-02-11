
# reltext

a bit of javascript which sets the font size of an element relative to 
the element's height

made with love by chase moskal

## reltext usage

1. **install with npm** — `npm install reltext`
2. **add html classnames** — `<div class="reltext">...</div>`
2. **import into your code** — `import reltext from "reltext"`
3. **execute reltext with defaults** — `reltext()`

### explicit usage with defaults

```javascript
// elements to apply reltext on
const elements = document.querySelectorAll(".reltext")

// font-size is 5% of the each element's height
const fraction = 5 / 100

// apply reltext
reltext(elements, fraction)
```
