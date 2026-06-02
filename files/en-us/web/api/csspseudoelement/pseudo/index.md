---
title: "CSSPseudoElement: pseudo() method"
short-title: pseudo()
slug: Web/API/CSSPseudoElement/pseudo
page-type: web-api-instance-method
browser-compat: api.CSSPseudoElement.pseudo
---

{{APIRef("CSSOM view API")}}

The **`pseudo()`** method of the {{domxref("CSSPseudoElement")}} interface returns a `CSSPseudoElement` object representing the [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements) of the specified type associated with the parent pseudo-element.

This is useful for returning a representation of a [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements), for example the `::marker` pseudo-element in `::after::marker`.

## Syntax

```js-nolint
pseudo(type)
```

### Parameters

- `type`
  - : A string representing the type of pseudo-element to return a representation of, for example {{cssxref("::marker")}}.

### Return value

A {{domxref("CSSPseudoElement")}} object instance, or `null` if `type` is not equal to a valid pseudo-element type.

`CSSPseudoElement` is a proxy object representing a pseudo-element. Therefore, provided `type` contains a valid pseudo-element type, `pseudo()` will always return a `CSSPseudoElement` instance, even if that pseudo-element hasn't been generated on the calling pseudo-element.

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

In our script, we grab references to our `<p>` and `<output>` elements, and retrieve `CSSPseudoElement` objects via the `pseudo()` method representing the `<p>` element's `::after` pseudo-element, and the `::after` pseudo-element's `::marker` pseudo-element. We then log some details of the child pseudo-element to our `<output>` element.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");
const pseudoElem = pElem.pseudo("::after");
const pseudoPseudoElem = pseudoElem.pseudo("::marker");

output.textContent = `${pseudoPseudoElem.type} pseudo-element. Parent: ${pseudoPseudoElem.parent}. Originating parent element: ${pseudoPseudoElem.element}`;
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
