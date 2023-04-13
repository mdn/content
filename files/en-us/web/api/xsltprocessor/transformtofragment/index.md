---
title: "XSLTProcessor: transformToFragment() method"
short-title: transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.transformToFragment
---

{{APIRef("XSLT")}}

The `transformToFragment()` method of the {{domxref("XSLTProcessor")}} interface transforms a provided {{DOMxRef("Node")}} source to a {{domxref("DocumentFragment")}} using the XSLT stylesheet associated with the `XSLTProcessor`.

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
