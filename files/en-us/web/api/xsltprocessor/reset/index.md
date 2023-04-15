---
title: "XSLTProcessor: reset() method"
short-title: reset()
slug: Web/API/XSLTProcessor/reset
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.reset
---

{{APIRef("XSLT")}}

The `reset()` method of the {{domxref("XSLTProcessor")}} interface removes all parameters (`<xsl:param>`) and the XSLT stylesheet from the processor. The `XSLTProcessor` will then be in its original state when it was created.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
