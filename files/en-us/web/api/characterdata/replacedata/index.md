---
title: CharacterData.replaceData()
slug: Web/API/CharacterData/replaceData
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
  - CharacterData
browser-compat: api.CharacterData.replaceData
---
{{APIRef("DOM")}}

The `replaceData()` of the {{domxref("CharacterData")}} interface
is similar to `insertData()`, but `replaceData()` allows
overwriting of a certain number of bytes.

## Syntax

```js
  characterData.replaceData(offset, count, data)
```

### Parameters

- `offset`
  - : The number of characters from the start of the data to insert at.
- `count`
  - : The number of characters to replace with the provided data.
- `data`
  - : The data to insert into the given `CharacterData` object.

### Return value

{{jsxref("undefined")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
