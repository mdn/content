---
title: "XSLTProcessor: removeParameter() method"
short-title: removeParameter()
slug: Web/API/XSLTProcessor/removeParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.removeParameter
---

{{APIRef("XSLT")}}

The `removeParameter()` method of the {{domxref("XSLTProcessor")}} interface removes the parameter (`<xsl:param>`) and its value from the stylesheet imported in the processor.

## Syntax

```js-nolint
removeParameter(namespaceURI, localName)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.

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
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
