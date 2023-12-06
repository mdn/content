---
title: XPathNSResolver
slug: Web/API/XPathNSResolver
page-type: web-api-interface
browser-compat: api.XPathNSResolver
---

{{APIRef("DOM XPath")}}

The `XPathNSResolver` interface permits prefix strings in an {{Glossary("XPath")}} expression to be properly bound to namespace URI strings.

The {{domxref("XPathEvaluator")}} interface can construct an implementation of `XPathNSResolver` from a node, or the interface may be implemented by any application.

## Instance methods

- {{DOMxRef("XPathNSResolver.lookupNamespaceURI()")}}
  - : Looks up the namespace URI associated to the given namespace prefix.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XPathEvaluator")}}
