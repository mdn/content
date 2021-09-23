---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
tags:
  - API
  - HTML DOM
  - HTMLCollection
  - Method
  - Reference
  - item
browser-compat: api.HTMLCollection.item
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLCollection")}} method `item()`
returns the node located at the specified offset into the collection.

> **Note:** Because the contents of an `HTMLCollection` are
> live, changes to the underlying DOM can and will cause the position of individual
> nodes in the collection to change, so the index value will not necessarily remain
> constant for a given node.

## Syntax

```js
var element = HTMLCollection.item(index)
```

### Parameters

- `index`
  - : The position of the {{domxref("Node")}} to be returned. Elements appear in an
    `HTMLCollection` in the same order in which they appear in the document's
    source.

### Return value

The {{domxref("Node")}} at the specified index, or `null` if
`index` is less than zero or greater than or equal to the length property.

## Usage notes

The `item()` method returns a numbered element from an
`HTMLCollection`. In JavaScript, it is easier to treat the
`HTMLCollection` as an array and to index it using array notation. See the
{{anch("Example", "example")}} below.

## Example

```js
var c = document.images;  // This is an HTMLCollection
var img0 = c.item(0);     // You can use the item() method this way
var img1 = c[1];          // But this notation is easier and more common
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NodeList.item()")}}
