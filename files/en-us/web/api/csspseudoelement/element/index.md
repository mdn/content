---
title: "CSSPseudoElement: element property"
short-title: element
slug: Web/API/CSSPseudoElement/element
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CSSPseudoElement.element
---

{{APIRef}}{{SeeCompatTable}}

The **`element`** read-only property of the {{DOMxRef("CSSPseudoElement")}} interface returns a reference to the ultimate originating element of the pseudo-element.

This differs from the {{DOMxRef("CSSPseudoElement.parent")}} property, which returns a reference to the pseudo-element's _immediate_ originating element: This can be either an {{DOMxRef("Element")}}, or a `CSSPseudoElement` in the case of a [nested pseudo-element](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements).

## Value

An {{DOMxRef("Element")}} representing the pseudo-element's ultimate originating parent element.

## Examples

### Basic usage

The example below demonstrates the relationship between `CSSPseudoElement.element` and {{DOMxRef("Element.pseudo()")}}:

```js
const myElement = document.querySelector("q");
const cssPseudoElement = myElement.pseudo("::after");
const originatingElement = cssPseudoElement.element;

console.log(myElement === originatingElement); // Outputs true
console.log(myElement.parentElement === originatingElement); // Outputs false
console.log(myElement.lastElementChild === cssPseudoElement); // Outputs false
console.log(myElement.lastChild === cssPseudoElement); // Outputs false
console.log(myElement.nextElementSibling === cssPseudoElement); // Outputs false
console.log(myElement.nextSibling === cssPseudoElement); // Outputs false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPseudoElement.parent")}}
- {{DOMxRef("CSSPseudoElement.pseudo()")}}
- {{DOMxRef("Element.pseudo()")}}
