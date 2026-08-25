---
title: "ProcessingInstruction: removeAttribute() method"
short-title: removeAttribute()
slug: Web/API/ProcessingInstruction/removeAttribute
page-type: web-api-instance-method
browser-compat: api.ProcessingInstruction.removeAttribute
---

{{ APIRef("DOM") }}

The **`removeAttribute()`** method of the {{domxref("ProcessingInstruction")}} removes the attribute with the specified name from the processing instruction.

## Syntax

```js-nolint
removeAttribute(attrName)
```

### Parameters

- `attrName`
  - : A string specifying the name of the attribute to remove from the
    processing instruction. If the specified attribute does not exist, `removeAttribute()`
    returns without generating an error.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

You should use `removeAttribute()` instead of setting the attribute value to `null` (either directly or using {{domxref("ProcessingInstruction.setAttribute", "setAttribute()")}}).
Many attributes will not behave as expected if you set them to `null`.

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

pi.removeAttribute("name");
console.log(pi);
// logs:
// <?start?>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttribute()")}}
- {{domxref("ProcessingInstruction.hasAttributes()")}}
- {{domxref("ProcessingInstruction.getAttribute()")}}
- {{domxref("ProcessingInstruction.getAttributeNames()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
