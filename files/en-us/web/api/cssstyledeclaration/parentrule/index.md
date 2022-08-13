---
title: CSSStyleDeclaration.parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.CSSStyleDeclaration.parentRule
---
{{ APIRef("CSSOM") }}

The **CSSStyleDeclaration.parentRule** read-only
property returns a {{domxref('CSSRule')}} that is the parent of this style
block, e.g. a {{domxref('CSSStyleRule')}} representing the style for a CSS
selector.

## Value

The CSS rule that contains this declaration block or `null` if this
{{domxref('CSSStyleDeclaration')}} is not attached to a {{domxref('CSSRule')}}.

## Examples

The following JavaScript code gets the parent CSS style rule from a
{{domxref('CSSStyleDeclaration')}}:

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
