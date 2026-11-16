---
title: "DocumentType: remove() method"
short-title: remove()
slug: Web/API/DocumentType/remove
page-type: web-api-instance-method
browser-compat: api.DocumentType.remove
---

{{APIRef("DOM")}}

The **`remove()`** method of the {{domxref("DocumentType")}} interface removes the `DocumentType` node from its parent node. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
remove()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using `remove()`

```js
document.doctype; // "<!doctype html>'
document.doctype.remove();
document.doctype; // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.doctype")}}
- {{domxref("CharacterData.remove()")}}
- {{domxref("Element.remove()")}}
