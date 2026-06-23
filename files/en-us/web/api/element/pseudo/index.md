---
title: "Element: pseudo() method"
short-title: pseudo()
slug: Web/API/Element/pseudo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Element.pseudo
---

{{SeeCompatTable}}

{{APIRef("DOM")}}.

The **`pseudo()`** method of the {{domxref("Element")}} interface returns a {{domxref("CSSPseudoElement")}} object representing the [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) of the specified type associated with the element.

Provided its `type` parameter contains a valid pseudo-element type, `pseudo()` will always return a `CSSPseudoElement` instance, even if that pseudo-element hasn't been generated on the calling element.

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

We give the `<p>` element's {{cssxref("::after")}} pseudo-element some {{cssxref("content")}} and apply some basic styles to both.

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
}
```

#### JavaScript

In our script, we grab references to our `<p>` and `<output>` elements, and retrieve a `CSSPseudoElement` representing the `<p>` element's `::after` pseudo-element via the `pseudo()` method. We then log some details of the pseudo-element to our `<output>` element. We also include some rudimentary error handling via a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) structure, to print an error message in non-supporting browsers.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  output.textContent = `${pseudoElem.type} pseudo-element. Parent: <${pseudoElem.parent.tagName.toLowerCase()}>`;
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

- {{DOMxRef("CSSPseudoElement.pseudo()")}}
