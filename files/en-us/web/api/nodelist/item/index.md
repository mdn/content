---
title: "NodeList: item() method"
short-title: item()
slug: Web/API/NodeList/item
page-type: web-api-instance-method
browser-compat: api.NodeList.item
---

{{APIRef("DOM")}}

Returns a node from a [`NodeList`](/en-US/docs/Web/API/NodeList) by index. This method
doesn't throw exceptions as long as you provide arguments. A value of `null`
is returned if the index is out of range, and a {{jsxref("TypeError")}} is thrown if no
argument is provided.

In JavaScript, instead of calling `nodeList.item(index)`, you can also access the `index` directly, like `nodeList[index]`.

## Syntax

```js-nolint
item(index)
```

### Parameters

- `index`
  - : The index of the node to be fetched. The index is zero-based.

### Return value

The `index`th node in the `nodeList` returned by the `item` method.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no argument is provided.

## Examples

```js
const tables = document.getElementsByTagName("table");
const firstTable = tables.item(1); // or tables[1] - returns the second table in the DOM
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
