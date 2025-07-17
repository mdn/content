---
title: "Document: createNSResolver() method"
short-title: createNSResolver()
slug: Web/API/Document/createNSResolver
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Document.createNSResolver
---

{{ ApiRef("DOM") }}{{deprecated_header}}

The **`createNSResolver()`** method of the {{domxref("Document")}} interface used to create a custom `XPathNSResolver` object. It now returns the input as-is and is only kept for compatibility reasons.

## Syntax

```js-nolint
createNSResolver(nodeResolver)
```

### Parameters

- `nodeResolver`
  - : A {{domxref("Node")}}.

### Return value

`nodeResolver` itself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.evaluate()")}}
- [Introduction to using XPath in JavaScript](/en-US/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
