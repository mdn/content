---
title: "DocumentType: after() method"
short-title: after()
slug: Web/API/DocumentType/after
page-type: web-api-instance-method
browser-compat: api.DocumentType.after
---

{{APIRef("DOM")}}

The **`DocumentType.after()`** method inserts a set of
{{domxref("Node")}} objects or strings in the children list of the
`DocumentType`'s parent, just after the `DocumentType`.
Strings are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js-nolint
after(param1)
after(param1, param2)
after(param1, param2, /* … ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} objects or strings to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement("html"));

myDoc.childNodes;
// NodeList [<!DOCTYPE html>, <html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentType.before()")}}
