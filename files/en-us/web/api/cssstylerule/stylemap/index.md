---
title: CSSStyleRule.styleMap
slug: Web/API/CSSStyleRule/styleMap
tags:
  - API
  - CSS Typed Object Model API
  - CSSStyleRule
  - Reference
  - Houdini
  - Experimental
browser-compat: api.CSSStyleRule.styleMap
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`styleMap`** read-only property of the
{{domxref("CSSStyleRule")}} interface returns a {{domxref('StylePropertyMap')}} object
which provides access to the rule's property-value pairs.

## Syntax

```js
var stylePropertyMap = cssStyleRule.styleMap;
```

### Value

A {{domxref('StylePropertyMap')}} object.

## Example

The following example shows `styleMap` being used to modify a style using
the {{domxref('StylePropertyMap.set()')}} method.

```js
const stylesheet = document.styleSheets[0];

Object.values(stylesheet.cssRules).forEach(block => {
  if (block.selectorText === 'button') {
    block.styleMap.set('--mainColor', 'black');
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
