---
title: XPathNSResolver.lookupNamespaceURI()
slug: Web/API/XPathNSResolver/lookupNamespaceURI
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM XPath API
  - Method
  - Reference
  - XPath
  - XPathNSResolver
browser-compat: api.XPathNSResolver.lookupNamespaceURI
---
{{APIRef("DOM XPath")}}

The `lookupNamespaceURI` method looks up the namespace URI associated to the
given namespace prefix within an {{Glossary("XPath")}} expression evaluated by the
{{domxref("XPathEvaluator")}} interface.

## Syntax

```js
lookupNamespaceURI(prefix)
```

### Parameters

- `prefix`
  - : A string representing the prefix to look for.

### Return value

A string representing the associated namespace URI or
`null` if none is found.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XPathEvaluator")}}
- {{domxref("Node.lookupNamespaceURI()")}}
