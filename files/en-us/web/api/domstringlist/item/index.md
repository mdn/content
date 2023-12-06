---
title: "DOMStringList: item() method"
short-title: item()
slug: Web/API/DOMStringList/item
page-type: web-api-instance-method
browser-compat: api.DOMStringList.item
---

{{APIRef("DOM")}}

The **`item()`** method returns a string from a [`DOMStringList`](/en-US/docs/Web/API/DOMStringList) by index.

## Syntax

```js-nolint
item(index)
```

JavaScript also offers an array-like bracketed syntax for obtaining an item from a
`DOMStringList` by index:

```js
list[index];
```

### Parameters

- `index`
  - : the index of the string to get. The index is zero-based.

### Return value

The string at the index position in the `DOMStringList`; otherwise `null` if the provided index is out of range.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no argument is provided.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
