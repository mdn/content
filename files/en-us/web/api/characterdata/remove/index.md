---
title: CharacterData.remove()
slug: Web/API/CharacterData/remove
tags:
  - Method
  - Reference
browser-compat: api.CharacterData.remove
---
{{APIRef("DOM")}}

The **`remove()`** method of the {{domxref("CharacterData")}} removes the text contained in the node.

## Syntax

```js
remove();
```

### Parameters

None.

## Example

### Using `remove()`

```html
<span>Result: </span>A long string.
```

```js
let span = document.getElementsByTagName("span")[0];
let textnode = span.nextSibling;

textnode.remove(); // Removes the text
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.remove()")}}
- {{domxref("CharacterData.deleteData()")}}
