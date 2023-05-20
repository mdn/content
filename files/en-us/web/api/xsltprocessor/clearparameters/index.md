---
title: "XSLTProcessor: clearParameters() method"
short-title: clearParameters()
slug: Web/API/XSLTProcessor/clearParameters
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.clearParameters
---

{{APIRef("XSLT")}}

The `clearParameters()` method of the {{domxref("XSLTProcessor")}} interface removes all parameters (`<xsl:param>`) and their values from the stylesheet imported in the processor. The `XSLTProcessor` will then use the default values specified in the XSLT stylesheet.

## Syntax

```js-nolint
clearParameters()
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
- {{domxref("XSLTProcessor.reset()")}}
