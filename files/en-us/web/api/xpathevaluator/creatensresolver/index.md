---
title: "XPathEvaluator: createNSResolver() method"
short-title: createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.XPathEvaluator.createNSResolver
---

{{APIRef("DOM XPath")}}{{deprecated_header}}

The **`createNSResolver()`** method of the {{domxref("XPathEvaluator")}} interface used to create a custom `XPathNSResolver` object. It now returns the input as-is and is only kept for compatibility reasons.

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

- {{DOMxRef("Document.createNSResolver()")}}
- {{DOMxRef("XPathExpression")}}
