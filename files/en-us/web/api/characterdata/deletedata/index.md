---
title: CharacterData.deleteData()
slug: Web/API/CharacterData/deleteData
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.deleteData
---

{{APIRef("DOM")}}

The **`deleteData()`** method of the {{domxref("CharacterData")}} interface
removes all or part of the data from this `CharacterData` node.

## Syntax

```js
characterData.deleteData(offset, count)
```

### Parameters

- `offset`
  - : The number of bytes from the start of the data to remove from.
    `0` is the first character of the string.
- `count`
  - : The number of bytes to remove.

### Return value

None.

## Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `offset` is greater than the length of the contained data.

## Example

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.deleteData(1, 5);
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
