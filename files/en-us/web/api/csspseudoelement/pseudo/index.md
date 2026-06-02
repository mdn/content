---
title: "CSSPseudoElement: pseudo() method"
short-title: pseudo()
slug: Web/API/CSSPseudoElement/pseudo
page-type: web-api-instance-method
browser-compat: api.CSSPseudoElement.pseudo
---

{{APIRef}}

The **`pseudo()`** method of the {{domxref("CSSPseudoElement")}} interface returns a `CSSPseudoElement` instance representing a specific [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements).

## Syntax

```js-nolint
pseudo(type)
```

### Parameters

- `type`
  - : A string representing the type of pseudo-element to return a representation of. Valid values are:
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### Return value

A {{domxref("CSSPseudoElement")}} object instance, or `null` if `type` is not equal to a valid pseudo-element type.

## Description

The `CSSPseudoElement.pseudo()` method is used to target a pseudo-element that is attached to another pseudo-element, rather than directly to a standard DOM element. For example, if a `::before` pseudo-element generates a list marker — selectable via `::before::marker` — this method can retrieve the `::marker` nested inside that `::before`. You call the method on the parent pseudo-element and pass the type of the nested child pseudo-element as an argument.

Provided its `type` property contains a valid pseudo-element type, `pseudo()` will always return a `CSSPseudoElement` instance, even if that pseudo-element hasn't been generated on the calling pseudo-element.

## Examples

### Basic usage

In this example, we demonstrate basic usage of the `pseudo()` method.

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
- {{DOMxRef("CSSPseudoElement.parent")}}
- {{DOMxRef("Element.pseudo()")}}
