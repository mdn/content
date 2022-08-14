---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
page-type: web-api-instance-method
tags:
  - API
  - CSSOM
  - Method
  - Reference
browser-compat: api.CSSStyleDeclaration.removeProperty
---
{{ APIRef("CSSOM") }}

The **`CSSStyleDeclaration.removeProperty()`** method interface
removes a property from a CSS style declaration object.

## Syntax

```js
removeProperty(property)
```

### Parameters

- `property`
  - A string representing the property name to be removed. Multi-word property names are hyphenated and not camel-cased.

### Return value

A string equal to the value of the CSS property before it was removed.

### Exceptions

- `NoModificationAllowedError` {{domxref('DOMException')}}
  - : Thrown when the property or declaration block is read-only.

## Examples

The following JavaScript code removes the `background-color` CSS property
from a selector rule:

```js
const declaration = document.styleSheets[0].rules[0].style;
const oldValue = declaration.removeProperty('background-color');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
