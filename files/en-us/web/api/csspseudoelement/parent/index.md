---
title: "CSSPseudoElement: parent property"
short-title: parent
slug: Web/API/CSSPseudoElement/parent
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSPseudoElement.parent
---

{{APIRef}}{{SeeCompatTable}}

The **`parent`** read-only property of the {{DOMxRef("CSSPseudoElement")}} interface returns a reference to the immediate parent of the pseudo-element, which can be an {{DOMxRef("Element")}}, or a `CSSPseudoElement` in the case of a [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements).

This differs from the {{DOMxRef("CSSPseudoElement.element")}} property, which always returns an `Element`: A reference to the originating parent element of the pseudo-element.

## Value

An {{DOMxRef("Element")}} or a {{DOMxRef("CSSPseudoElement")}} representing the pseudo-element's immediate parent.

## Examples

### Basic usage

In this example, we demonstrate the difference between the `parent` and {{DOMxRef("CSSPseudoElement.element", "element")}} properties.

#### HTML

We include a {{htmlelement("p")}} element containing text, and an {{htmlelement("output")}} element to log output from JavaScript.

```html live-sample___basic
<p>New York's hottest club is...</p>
<output></output>
```

#### CSS

We give the `<p>` element's {{cssxref("::after")}} pseudo-element some {{cssxref("content")}} and set its {{cssxref("display")}} to `list-item` so it will generate a `::marker`. We also apply some basic styles.

```css hidden live-sample___basic
body {
  width: 80%;
  margin: 0 auto;
}
```

```css live-sample___basic
p {
  background-color: violet;
  padding: 20px;
}

p::after {
  content: "Crease";
  background-color: cadetblue;
  padding: 20px;
  display: list-item;
}

p::after::marker {
  content: "🔹";
}
```

#### JavaScript

In our script, we grab references to our `<p>` and `<output>` elements, and retrieve `CSSPseudoElement` objects via the `pseudo()` method representing the `<p>` element's `::after` pseudo-element, and the `::after` pseudo-element's `::marker` pseudo-element. We then log some details of the child pseudo-element to our `<output>` element. We also include some rudimentary error handling via a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) structure, to print an error message in non-supporting browsers.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  const pseudoPseudoElem = pseudoElem.pseudo("::marker");
  output.textContent = `${pseudoPseudoElem.type} pseudo-element. Parent: ${pseudoPseudoElem.parent}. Originating parent element: ${pseudoPseudoElem.element}`;
} catch (e) {
  output.textContent = `Your browser doesn't support CSSPseudoElement and/or the pseudo() method: ${e}`;
}
```

#### Result

{{embedlivesample("basic", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPseudoElement.element")}}
- {{DOMxRef("CSSPseudoElement.pseudo()")}}
- {{DOMxRef("Element.pseudo()")}}
