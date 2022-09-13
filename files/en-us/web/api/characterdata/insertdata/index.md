---
title: CharacterData.insertData()
slug: Web/API/CharacterData/insertData
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.insertData
---

{{APIRef("DOM")}}

The **`insertData()`** method of the {{domxref("CharacterData")}} interface
inserts the provided data into this `CharacterData` node's current data,
at the provided offset from the start of the existing data.
The provided data is spliced into the existing data.

## Syntax

```js
characterData.insertData(offset, data)
```

### Parameters

- `offset`
  - : The offset number of characters to insert the provided data at.
    `0` is the first character of the string.
- `data`
  - : The data to insert.

### Return value

None.

## Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if offset is negative or greater than the length of the contained data.

## Example

```html
<span>Result: </span>A string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.insertData(2, "long ");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
