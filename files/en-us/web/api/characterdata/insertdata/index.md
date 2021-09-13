---
title: CharacterData.insertData()
slug: Web/API/CharacterData/insertData
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
  - CharacterData
browser-compat: api.CharacterData.insertData
---
{{APIRef("DOM")}}

The `insertData()` method of the {{domxref("CharacterData")}}
interface inserts the provided data into this `CharacterData`
Node's current data, at the provided offset from the start of the existing
data. The provided data is spliced into the existing data.

## Syntax

```js
  characterData.insertData(offset, data)
```

### Parameters

- `offset`
  - : The offset number of characters to insert the provided data at.
- `data`
  - : The data to insert to the given `CharacterData` object.

### Return value

{{jsxref("undefined")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
