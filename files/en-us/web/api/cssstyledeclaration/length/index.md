---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - Property
  - Reference
browser-compat: api.CSSStyleDeclaration.length
---
{{ APIRef("CSSOM") }}

The read-only property returns an integer that represents the
number of style declarations in this CSS declaration block.

## Value

An integer that provides the number of styles explicitly set on the parent of
the instance.

## Examples

The following gets the number of explicitly set styles on the following HTML element:

```html
<div id="div1" style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript code:

```js
const myDiv = document.getElementById('div1');
const divStyle = myDiv.style;
const len = divStyle.length; // 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
