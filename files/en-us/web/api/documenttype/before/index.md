---
title: DocumentType.before()
slug: Web/API/DocumentType/before
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.DocumentType.before
---
{{APIRef("DOM")}}

The **`DocumentType.before()`** method inserts a set of
{{domxref("Node")}} objects or strings in the children list of the
`DocumentType`'s parent, just before the `DocumentType`.
Strings are inserted as equivalent {{domxref("Text")}} nodes.

> **Note:** Putting nodes before the document's doctype will set the rendering mode to
> [quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
> in some browsers (Internet Explorer). It is not advisable to do this.

## Syntax

```js
before(param1)
before(param1, param2)
before(param1, param2, /* … ,*/ paramN)
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
[conditional comment](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#ie_conditional_comments)
works for IE as well, though:

```js
let docType = document.implementation.createDocumentType("html", "", "");
let myDoc = document.implementation.createDocument("", "", docType);

docType.before(document.createComment('<!--[if !IE]> conditional comment <![endif]-->'));

myDoc.childNodes;
// NodeList [<!--[if !IE]> conditional comment <![endif]-->, <!DOCTYPE html>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentType.after()")}}
