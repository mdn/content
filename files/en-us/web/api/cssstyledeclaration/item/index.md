---
title: CSSStyleDeclaration.item()
slug: Web/API/CSSStyleDeclaration/item
tags:
  - API
  - CSSOM
  - Method
  - Reference
browser-compat: api.CSSStyleDeclaration.item
---
{{ APIRef("CSSOM") }}

The `CSSStyleDeclaration.item()`
method interface returns a CSS property name from a {{domxref('CSSStyleDeclaration')}}
by index.

This method doesn't throw exceptions as long as you provide
arguments; the empty string is returned if the index is out of range and a
`TypeError` is thrown if no argument is provided.

## Syntax

```js
var propertyName = style.item(index);
```

### Parameters

- _`index`_ is the index of the node to be fetched. The index is
  zero-based.

### Return value

- *`propertyName`* is a {{domxref('DOMString')}} that is the name of
  the CSS property at the specified index.

JavaScript has a special simpler syntax for obtaining an item from a NodeList by index:

```js
var propertyName = style[index];
```

## Example

```js
var style = document.getElementById('div1').style;
var propertyName = style.item(1); // or style[1] - returns the second style listed
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
