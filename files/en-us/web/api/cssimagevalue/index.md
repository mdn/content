---
title: CSSImageValue
slug: Web/API/CSSImageValue
page-type: web-api-interface
browser-compat: api.CSSImageValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSImageValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) represents values for CSS properties that take an {{cssxref("image")}} value, such as {{cssxref("background-image")}}, {{cssxref("list-style-image")}}, or {{cssxref("border-image-source")}}.

{{InheritanceDiagram}}

## Instance properties

None.

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSStyleValue")}}._

## Description

`CSSImageValue` can contain every kind of value the {{cssxref("image")}} data type accepts, including URL-based images specified using {{cssxref("url_function", "url()")}},
{{cssxref("gradient")}}s such as {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("image/image", "image()")}}, {{cssxref("image/image-set", "image-set()")}}, {{cssxref("cross-fade", "cross-fade()")}}, and {{cssxref("element()")}}.

For image values that involve a URL, such as `url()` or `image()`, relative and fragment URLs are resolved the same way as in CSS.
That is, relative to the style sheet's URL, or the document's URL for inline styles.

This resolution happens during value computation rather than at parse time, which means that the value of a `CSSImageValue` depends on whether you're working with the specified value or the computed value:

- A **specified** value carries an unresolved relative URL.
  If the unresolved value is copied to an element in a different document, it resolves against the destination document's own base URL and can point to a different resource.
- A **computed** value has already been resolved to an absolute URL, so it behaves consistently no matter which document it's later applied to.
- A **fragment-only** URL value is always resolved against the current document.

Note that `CSSImageValue` objects are intentionally opaque: they don't expose any information about the image they represent.

## Examples

### Basic usage

This example sets the `background-image` of a {{htmlelement("button")}} using `url()`, specifying a relative URL for the file.
We then demonstrate getting the stringified computed and specified values.

Note that there is hidden logging code that is not shown, as it is not relevant to the example.

#### HTML

First we define the button element:

```html
<button>Magic Wand</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

We add some CSS, including a background image requesting a binary file:

```css
button {
  display: inline-block;
  min-height: 100px;
  min-width: 100px;
  background: no-repeat 5% center url("magic-wand.png") aqua;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Next we get the `<button>` element so that we can query its specified and computed styles.

```js
// get the element
const button = document.querySelector("button");
```

To get the computed value of the `background-image` we first get the element's style map.
Then we `get()` the `background-image` from the style map and stringify it.
We also print the name of the constructor to demonstrate the returned object is a `CSSImageValue`.

```js
// Get all computed styles with computedStyleMap()
const allComputedStyles = button.computedStyleMap();
const computedImageCSS = allComputedStyles.get("background-image");
log(computedImageCSS.toString());
log(computedImageCSS.constructor.name); // CSSImageValue
```

Next we get the specified value of the `background-image`.
To do this we first get the set of CSS rules associated with the `css-output` element — this is where MDN writes CSS for the playground.
We then filter the rule to find the CSS rule matched purely on its name "button" (note, this is fragile code in a real application).
Once we have the associated rule we can get the image from its style map, and log the value.

```js
// Get the specified value
const sheet = document.getElementById("css-output").sheet;
const rule = [...sheet.cssRules].find((r) => r.selectorText === "button");
const specifiedImageCSS = rule.styleMap.get("background-image");
log(specifiedImageCSS.toString());
log(specifiedImageCSS.constructor.name); // CSSImageValue
```

#### Result

The results are shown below.
Note that the computed value displayed first has a fully resolved URL, while the specified value is a relative URL.

{{EmbedLiveSample("Examples", 120, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSKeywordValue")}}
- {{domxref("CSSNumericValue")}}
- {{domxref("CSSPositionValue")}}
- {{domxref("CSSTransformValue")}}
- {{domxref("CSSUnparsedValue")}}
