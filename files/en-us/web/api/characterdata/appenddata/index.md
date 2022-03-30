---
title: CharacterData.appendData()
slug: Web/API/CharacterData/appendData
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.appendData
---
{{APIRef("DOM")}}

The **`appendData()`** method of the {{domxref("CharacterData")}} interface
adds the provided data to the end of the node's current data.

## Syntax

```js
appendData(data);
```

### Parameters

- `data`
  - : The data to append to the current node.

### Return value

None.

## Example

```html
<span>Result: </span>A text
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.appendData(" - appended text.");
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.deleteData()")}}, {{domxref("CharacterData.insertData()")}}, {{domxref("CharacterData.replaceData()")}}
- {{domxref("CharacterData.data")}}
