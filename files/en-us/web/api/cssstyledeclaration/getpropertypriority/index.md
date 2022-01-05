---
title: CSSStyleDeclaration.getPropertyPriority()
slug: Web/API/CSSStyleDeclaration/getPropertyPriority
tags:
  - API
  - CSSOM
  - Method
  - Reference
browser-compat: api.CSSStyleDeclaration.getPropertyPriority
---
{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.getPropertyPriority()** method interface returns
a {{domxref('DOMString')}} that provides all explicitly set priorities on the CSS
property.

## Syntax

```js
var priority = style.getPropertyPriority(property);
```

### Parameters

- *`property`* is a {{domxref('DOMString')}} representing the
  property name to be checked.

### Return value

- `priority` is a {{domxref('DOMString')}} that represents the
  priority (e.g. `"important"`) if one exists. If none exists, returns the
  empty string.

## Example

The following JavaScript code checks whether `margin` is marked as important
in a CSS selector rule:

```js
var declaration = document.styleSheets[0].cssRules[0].style;
var isImportant = declaration.getPropertyPriority('margin') === 'important';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
