---
title: "CSSStyleDeclaration: getPropertyValue() method"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
page-type: web-api-instance-method
browser-compat: api.CSSStyleDeclaration.getPropertyValue
---

{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.getPropertyValue()** method interface returns a
string containing the value of a specified CSS property.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameters

- `property`
  - : A string representing the property name (in hyphen case) to be checked.

### Return value

A string containing the value of the property. If not set, returns the empty string.

## Examples

The following JavaScript code queries the value of the `margin` property in
a CSS selector rule:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
