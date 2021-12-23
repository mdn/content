---
title: CharacterData.substringData()
slug: Web/API/CharacterData/substringData
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.substringData
---
{{APIRef("DOM")}}

The **`substringData()`** method of the {{domxref("CharacterData")}} interface
returns a portion of the existing data,
starting at the specified index
and extending for a given number of characters afterwards.

## Syntax

```js
  domString = characterData.substringData(offset, count)
```

### Parameters

- `offset`
  - : The index of the first character to include in the returned substring.
    `0` is the first character of the string.
- `count`
  - : The number of characters to return.

### Return value

A new {{jsxref("String")}} object with the substring.

## Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `offset` + `count` is larger than the length of the contained data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
