---
title: CSSStyleDeclaration.getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
tags:
  - API
  - CSSOM
  - Method
  - Reference
browser-compat: api.CSSStyleDeclaration.getPropertyValue
---
{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.getPropertyValue()** method interface returns a
{{domxref('DOMString')}} containing the value of a specified CSS property.

## Syntax

```js
var value = style.getPropertyValue(property);
```

### Parameters

- *`property`* is a {{domxref('DOMString')}} representing the
  property name (hyphen case) to be checked.

### Return value

- `value` is a {{domxref('DOMString')}} containing the value of
  the property. If not set, returns the empty string.

## Example

The following JavaScript code queries the value of the `margin` property in
a CSS selector rule:

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var value = declaration.getPropertyValue('margin'); // "1px 2px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
