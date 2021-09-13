---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
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

## Syntax

```js
var num = styles.length;
```

### Value

An integer that provides the number of styles explicitly set on the parent of
the instance.

## Example

The following gets the number of explicitly set styles on the following HTML element:

```html
<div id="div1" style="margin: 0 10px; background-color: #CA1; font-family: monospace"></div>
```

JavaScript code:

    var myDiv = document.getElementById('div1'); var divStyle = myDiv.style; var len = divStyle.length; // 6

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
