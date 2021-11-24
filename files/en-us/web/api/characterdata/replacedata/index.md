---
title: CharacterData.replaceData()
slug: Web/API/CharacterData/replaceData
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.replaceData
---
{{APIRef("DOM")}}

The **`replaceData()`** of the {{domxref("CharacterData")}} interface
replace a part of the data inside the node with the string given in paramater.

This method is similar to `insertData()`, but `replaceData()` allows
overwriting a certain number of bytes.

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

## Example

```html
<span>Result: </span>A long string.
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.replaceData(2, 4, "replaced");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.appendData()")}}, {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.insertData()")}}
- {{domxref("CharacterData.data")}}
