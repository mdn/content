---
title: Element.hasAttributes()
slug: Web/API/Element/hasAttributes
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.hasAttributes
---
{{ApiRef("DOM")}}

The **`hasAttributes()`** method of the {{domxref("Element")}}
interface returns a boolean value indicating whether the current element has any
attributes or not.

## Syntax

```js
var result = element.hasAttributes();
```

### Return value

- `result`
  - : holds the return value `true` or `false`.

## Examples

```js
let foo = document.getElementById('foo');
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## Polyfill

```js
;(function(prototype) {
  prototype.hasAttributes = prototype.hasAttributes || function() {
    return (this.attributes.length > 0);
  }
})(Element.prototype);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
