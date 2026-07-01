---
title: "CSSFunctionRule: getParameters() method"
short-title: getParameters()
slug: Web/API/CSSFunctionRule/getParameters
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CSSFunctionRule.getParameters
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`getParameters()`** method of the {{domxref("CSSFunctionRule")}} interface returns an array of objects representing the custom function's parameters.

## Syntax

```js-nolint
getParameters()
```

### Parameters

None.

### Return value

An array of objects containing the following properties:

- `name`
  - : A string representing the name of the function parameter.
- `type`
  - : A string representing the data type of the parameter, or `*` if no data type was specified.
- `defaultValue`
  - : A string representing the default value of the parameter, or `null` if no default value was specified.

If no parameters were specified in the associated {{cssxref("@function")}} at-rule, an empty array is returned.

## Examples

See the main {{domxref("CSSFunctionRule")}} reference page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}}
