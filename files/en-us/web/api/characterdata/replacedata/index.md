---
title: CharacterData.replaceData()
slug: Web/API/CharacterData/replaceData
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.replaceData
---

{{APIRef("DOM")}}

The **`replaceData()`** method of the {{domxref("CharacterData")}} interface removes a certain number of characters of the existing text in a given `CharacterData` node and replaces those characters with the text provided.

## Syntax

```js
characterData.replaceData(offset, count, data)
```

### Parameters

- `offset`
  - : The number of characters from the start of the data to insert at.
    `0` is the first character of the string.
- `count`
  - : The number of characters to replace with the provided data.
- `data`
  - : The data to insert.

### Return value

None.

## Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `offset` or `count` is negative or `offset` is greater than the length of the contained data.

## Example

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textnode = span.nextSibling;

textnode.replaceData(2, 4, "replaced");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}
- {{domxref("CharacterData.deleteData()")}}
- {{domxref("CharacterData.insertData()")}}
- {{domxref("CharacterData.data")}}
