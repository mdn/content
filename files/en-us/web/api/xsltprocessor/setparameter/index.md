---
title: "XSLTProcessor: setParameter() method"
short-title: setParameter()
slug: Web/API/XSLTProcessor/setParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.setParameter
---

{{APIRef("XSLT")}}

The `setParameter()` method of the {{domxref("XSLTProcessor")}} interface sets the value of a parameter (`<xsl:param>`) in the stylesheet imported in the processor.

## Syntax

```js-nolint
setParameter(namespaceURI, localName, value)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.
- `value`
  - : The value of the parameter.
    > **Note:** Firefox supports any kind of parameter. Chrome, Edge and Safari only support string parameters.

### Return value

None ({{jsxref("undefined")}}).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
