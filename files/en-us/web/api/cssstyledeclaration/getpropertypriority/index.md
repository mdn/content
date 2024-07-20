---
title: "CSSStyleDeclaration: getPropertyPriority() method"
short-title: getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
page-type: web-api-instance-method
browser-compat: api.CSSStyleDeclaration.getPropertyPriority
---

{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.getPropertyPriority()** method interface returns
a string that provides all explicitly set priorities on the CSS
property.

## Syntax

```js-nolint
getPropertyPriority(property)
```

### Parameters

- `property`
  - : A string representing the property name to be checked.

### Return value

A string that represents the priority (e.g. `"important"`) if one exists.
If none exists, returns the empty string.

## Examples

The following JavaScript code checks whether `margin` is marked as important
in a CSS selector rule:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const isImportant = declaration.getPropertyPriority("margin") === "important";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
