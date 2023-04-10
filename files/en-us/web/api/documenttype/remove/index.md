---
title: "DocumentType: remove() method"
short-title: remove()
slug: Web/API/DocumentType/remove
page-type: web-api-instance-method
browser-compat: api.DocumentType.remove
---

{{APIRef("DOM")}}

The **`DocumentType.remove()`** method removes a document's `doctype`.

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
document.doctype; // "<!DOCTYPE html>'
document.doctype.remove();
document.doctype; // null
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.doctype")}}
