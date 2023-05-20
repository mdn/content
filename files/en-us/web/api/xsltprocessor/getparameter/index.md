---
title: "XSLTProcessor: getParameter() method"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.getParameter
---

{{APIRef("XSLT")}}

The `getParameter()` method of the {{domxref("XSLTProcessor")}} interface returns the value of a parameter (`<xsl:param>`) from the stylesheet imported in the processor.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.

### Return value

An object that is the value associated with the parameter. It can be of any type.

> **Note:** Firefox supports any kind of parameter. Chrome, Edge and Safari only support string parameters.

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
