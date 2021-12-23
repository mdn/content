---
title: CSSPseudoElement.type
slug: Web/API/CSSPseudoElement/type
tags:
  - API
  - CSSPseudoElement
  - Experimental
  - Property
  - Reference
  - Type
browser-compat: api.CSSPseudoElement.type
---
{{APIRef}}{{SeeCompatTable}}

The **`type`** read-only property of the
{{DOMxRef('CSSPseudoElement')}} interface returns the type of the pseudo-element as a
string, represented in the form of a [CSS selector](/en-US/docs/Web/CSS/CSS_Selectors#pseudo-elements).

## Syntax

```js
var typeOfPseudoElement = cssPseudoElement.type;
```

### Value

A {{DOMxRef('CSSOMString')}} containing one of the following values:

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## Examples

The example below demonstrates the relationship between
`CSSPseudoElement.type` and {{DOMxRef('Element.pseudo()')}}:

```js
const myElement = document.querySelector('q');
const mySelector = '::after';
const cssPseudoElement = myElement.pseudo(mySelector);
const typeOfPseudoElement = cssPseudoElement.type;

console.log(mySelector === typeOfPseudoElement); // Outputs true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef('Element.pseudo()')}}
- [Index
  of standard pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements#index_of_standard_pseudo-elements)
