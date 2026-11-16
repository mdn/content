---
title: "DocumentType: before() method"
short-title: before()
slug: Web/API/DocumentType/before
page-type: web-api-instance-method
browser-compat: api.DocumentType.before
---

{{APIRef("DOM")}}

The **`before()`** method of the {{domxref("DocumentType")}} interface inserts a set of {{domxref("Node")}} objects or strings in the children list of this `DocumentType`'s parent, just before this `DocumentType`. Strings are inserted as equivalent {{domxref("Text")}} nodes. Nothing happens if {{domxref("Node.parentNode", "parentNode")}} is `null`.

## Syntax

```js-nolint
before(param1)
before(param1, param2)
before(param1, param2, /* …, */ paramN)
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

### Adding a conditional comment

Comment nodes are valid before doctype declarations but not advisable
given they trigger quirks mode in IE. A
[conditional comment](https://www.sitepoint.com/internet-explorer-conditional-comments/)
works for IE as well, though:

```js
const docType = document.implementation.createDocumentType("html", "", "");
const myDoc = document.implementation.createDocument("", "", docType);

docType.before(
  document.createComment("<!--[if !IE]> conditional comment <![endif]-->"),
);

myDoc.childNodes;
// NodeList [<!--[if !IE]> conditional comment <![endif]-->, <!DOCTYPE html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentType.after()")}}
- {{domxref("CharacterData.before()")}}
- {{domxref("Element.before()")}}
