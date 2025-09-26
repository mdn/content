---
title: CSSStyleProperties
slug: Web/API/CSSStyleProperties
page-type: web-api-interface
browser-compat: api.CSSStyleProperties
---

{{APIRef("CSSOM")}}

The **`CSSStyleProperties`** interface represents inline or computed styles available on an element or the styles associated with a CSS style rule.

An object of this type has attributes corresponding to all [CSS properties](/en-US/docs/Web/CSS/Properties) supported by the browser, including those with `-moz` and `-webkit` prefixes, which can be accessed using methods such as {{DOMxRef("CSSStyleProperties/getPropertyValue", "getPropertyValue()")}} and {{DOMxRef("CSSStyleProperties/setPropertyValue", "setPropertyValue()")}} inherited from the {{DOMxRef("CSSStyleProperties")}} base class.

In addition, each attribute is reflected by a property that is {{glossary("camel case", )}}-named after the attribute.
This allows you to, for example, access the `margin-top` CSS property using the syntax `style.marginTop` (where `style` is a `CSSStyleProperties`), instead of the more cumbersome `style.getPropertyValue("margin-top")` or `style["margin-top"]`.

Properties and attributes with no defined value default to the empty string (`""`).
For an object representing an inline style declaration (not computed styles) this will be any style that is not defined in the declaration block.

`CSSStyleProperties` object instances are exposed using the following APIs:

- {{DOMxRef("HTMLElement.style")}}, {{domxref("SVGElement.style")}}, and {{domxref("MathMLElement.style")}}, which return the inline styles of a single element (e.g., `<div style="…">`).
- {{DOMxRef("Window.getComputedStyle()")}}, which exposes the `CSSStyleProperties` object as a **read-only** interface.
- {{DOMxRef("CSSStyleSheet")}} API. For example, `document.styleSheets[0].cssRules[0].style` returns a `CSSStyleProperties` object on the first CSS rule (a {{domxref("CSSStyleRule")}}) in the document's first stylesheet.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties of its parent, {{domxref("CSSStyleDeclaration")}}._

- Named properties
  - : Dashed attributes and camel-cased properties for all CSS properties supported by the browser.
- {{DOMxRef("CSSStyleProperties.cssFloat", "CSSStyleProperties.cssFloat")}}
  - : Special alias for the {{CSSxRef("float")}} CSS property.

## Instance methods

_This interface inherits the methods of its parent, {{domxref("CSSStyleDeclaration")}}._

## Examples

### Basic usage

Given an element with with the id of `el` you can get the styles as a `CSSStyleProperties` as shown:

```js
const element = document.querySelector("#el");
const elementStyle = element.style;
```

You can then log the {{cssxref("border-top-width")}} style of the element (for example) using any of the following options:

```js
console.log(elementStyle["border-top-width"]);
console.log(elementStyle.getPropertyValue("border-top-width"));
console.log(elementStyle.borderTopWidth);
```

### Getting all element style information

This example demonstrates how all the inline and computed styles with non-empty values might be obtained for an element, for both snake- and camel case properties.

#### HTML

The HTML defines a {{htmlelement("div")}} with a number of styles set, nested within another that sets the `font-weight`.
There are also buttons to get the inline styles ad computed styles for the element (and hidden code for a reset button and logging).

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
</div>
<button id="inline_style" type="button">Inline Style</button>
<button id="computed_style" type="button">Computed Style</button>
```

```html hidden
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 300px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

function clearLog(text) {
  logElement.innerText = "";
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  clearLog();
});
```

#### JavaScript

The code first defines the function we're going to use to get the style properties of our element "elt".
This uses [`Object.prototype.getOwnPropertyNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) to get all properties defined on the object and then filters those that have a value of `""` or are named "constructor".

Note that we need to use `getOwnPropertyNames()` rather than {{domxref("CSSStyleDeclaration.getPropertyValue()")}} because we want to also list the camel case properties, which are non-enumerable.

```js
function getPopulatedProperties(styleProperties) {
  const camelProps = Object.getOwnPropertyNames(
    Object.getPrototypeOf(styleProperties),
  ).filter((prop) => prop !== "constructor" && styleProperties[prop] !== "");

  for (const prop of camelProps) {
    try {
      log(`${prop} = ${styleProperties[prop]}`);
    } catch {// error}
  }
}
```

The code then checks and logs whether `CSSStyleProperties` is defined.
If it is defined then we create button event handlers to get the inline style or the enumerated style and log them.

```js
if (typeof window.CSSStyleProperties === "undefined") {
  log("CSSStyleProperties is not supported on this browser.");
} else {
  const element = document.querySelector("#elt");

  const inlineStyle = document.querySelector("#inline_style");
  inlineStyle.addEventListener("click", () => {
    clearLog();
    const elementStyle = element.style;
    getPopulatedProperties(elementStyle);
  });

  const computedStyle = document.querySelector("#computed_style");
  computedStyle.addEventListener("click", () => {
    clearLog();
    const compStyles = window.getComputedStyle(element);
    getPopulatedProperties(compStyles);
  });
}
```

#### Results

Press the buttons to show the inline and computed styles for the element.
Note that the inline styles only include the styles defined on the actual element: all the other properties have the value `""` and are not displayed.
The computed styles also include `font-weight`, which is defined on the parent, and many other computed styles.

{{EmbedLiveSample("Getting all element style information", "100", "400")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
