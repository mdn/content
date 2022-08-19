---
title: XPathEvaluator.createNSResolver()
slug: Web/API/XPathEvaluator/createNSResolver
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM XPath API
  - Method
  - NeedsExample
  - Reference
  - XPath
  - XPathEvaluator
browser-compat: api.XPathEvaluator.createNSResolver
---
{{APIRef("DOM XPath")}}

This method adapts any DOM node to resolve namespaces so that an XPath expression can
be easily evaluated relative to the context of the node where it appeared within the
document.

This adapter works like the DOM Level 3 method {{domxref("Node.lookupNamespaceURI",
  "Node.lookupNamespaceURI()")}} in resolving the namespace URI from a given prefix using
the current information available in the node's hierarchy at the time the method is
called, also correctly resolving the implicit `xml` prefix.

## Syntax

```js
createNSResolver(nodeResolver)
```

### Parameters

- `nodeResolver`
  - : A {{domxref("Node")}} to be used as a context for namespace resolution.

### Return value

An {{domxref("XPathNSResolver")}} object which resolves namespaces with respect to the
definitions in scope for a specified node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Document.createNSResolver()")}}
- {{DOMxRef("XPathExpression")}}
