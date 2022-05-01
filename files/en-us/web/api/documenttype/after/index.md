---
title: DocumentType.after()
slug: Web/API/DocumentType/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.DocumentType.after
---
{{APIRef("DOM")}}

The **`DocumentType.after()`** method inserts a set of
{{domxref("Node")}} or string objects in the children list of the
`DocumentType`'s parent, just after the `DocumentType`.
String objects are inserted as equivalent {{domxref("Text")}} nodes.

## Syntax

```js
after(param1)
after(param1, param2)
after(param1, param2, /* ... ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to insert.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.after(document.createElement('html'));

myDoc.childNodes;
// NodeList [<!DOCTYPE html>, <html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentType.before()")}}
