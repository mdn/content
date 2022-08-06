---
title: Element.hasAttributes()
slug: Web/API/Element/hasAttributes
page-type: web-api-instance-method
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
hasAttributes()
```

### Parameters

None.

### Return value

A boolean.

## Examples

```js
let foo = document.getElementById('foo');
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
