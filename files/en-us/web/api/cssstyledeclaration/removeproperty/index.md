---
title: CSSStyleDeclaration.removeProperty()
slug: Web/API/CSSStyleDeclaration/removeProperty
tags:
  - API
  - CSSOM
  - Method
  - Reference
browser-compat: api.CSSStyleDeclaration.removeProperty
---
{{ APIRef("CSSOM") }}

The **`CSSStyleDeclaration.removeProperty()`** method interface
removes a property from a CSS style declaration object.

## Syntax

```js
var oldValue = style.removeProperty(property);
```

### Parameters

- *`property`* is a {{domxref('DOMString')}} representing the
  property name to be removed. Note that multi-word property names are hyphenated and
  not camel-cased.

### Return value

- `oldValue` is a {{domxref('DOMString')}} equal to the value of
  the CSS property before it was removed.

### Exceptions

- {{domxref('DOMException')}} NO_MODIFICATION_ALLOWED_ERR: if the property or
  declaration block is read only.

## Example

The following JavaScript code removes the `background-color` CSS property
from a selector rule:

```js
var declaration = document.styleSheets[0].rules[0].style;
var oldValue = declaration.removeProperty('background-color');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
