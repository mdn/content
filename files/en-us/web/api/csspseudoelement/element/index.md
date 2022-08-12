---
title: CSSPseudoElement.element
slug: Web/API/CSSPseudoElement/element
page-type: web-api-instance-property
tags:
  - API
  - CSSPseudoElement
  - Element
  - Experimental
  - Property
  - Reference
browser-compat: api.CSSPseudoElement.element
---
{{APIRef}}{{SeeCompatTable}}

The **`element`** read-only property of the
{{DOMxRef('CSSPseudoElement')}} interface returns a reference to the originating element
of the pseudo-element, in other words its parent element.

## Value

An {{DOMxRef('Element')}} representing the pseudo-element's originating element.

## Examples

The example below demonstrates the relationship between
`CSSPseudoElement.element` and {{DOMxRef('Element.pseudo()')}}:

```js
const myElement = document.querySelector('q');
const cssPseudoElement = myElement.pseudo('::after');
const originatingElement = cssPseudoElement.element;

console.log(myElement === originatingElement);                  // Outputs true
console.log(myElement.parentElement === originatingElement);    // Outputs false
console.log(myElement.lastElementChild === cssPseudoElement);   // Outputs false
console.log(myElement.lastChild === cssPseudoElement);          // Outputs false
console.log(myElement.nextElementSibling === cssPseudoElement); // Outputs false
console.log(myElement.nextSibling === cssPseudoElement);        // Outputs false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef('Element.pseudo()')}}
