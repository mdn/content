---
title: "CharacterData: remove() method"
short-title: remove()
slug: Web/API/CharacterData/remove
page-type: web-api-instance-method
browser-compat: api.CharacterData.remove
---

{{APIRef("DOM")}}

The **`remove()`** method of the {{domxref("CharacterData")}} interface removes the `CharacterData` node from its parent node. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
remove()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Example

### Using `remove()`

```html
<span>Result: </span>A long string.
```

```js
const span = document.querySelector("span");
const textNode = span.nextSibling;

textNode.remove(); // Removes the text
```

{{EmbedLiveSample("Example", "100%", 50)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CharacterData.deleteData()")}}
- {{domxref("DocumentType.remove()")}}
- {{domxref("Element.remove()")}}
