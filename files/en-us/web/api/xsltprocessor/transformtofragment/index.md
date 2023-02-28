---
title: XSLTProcessor.transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.transformToFragment 
---

{{APIRef("XSLT")}}

The `transformToFragment()` method of the {{domxref("XSLTProcessor")}} interface transforms the {{DOMxRef("Node")}} source given in parameter using the XSLT stylesheet associated with `XSLTProcessor` with the {{domxref("XSLTProcessor.importStylesheet")}}.

## Syntax

```js-nolint
transformToFragment(source)
```

### Parameters

- `source`
  - : The {{DOMxRef("Node")}} source to apply the XSLT stylesheet to.

### Return value

A {{domxref("DocumentFragment")}}.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.transformToDocument()")}}
