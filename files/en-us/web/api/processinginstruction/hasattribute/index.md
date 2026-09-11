---
title: "ProcessingInstruction: hasAttribute() method"
short-title: hasAttribute()
slug: Web/API/ProcessingInstruction/hasAttribute
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ProcessingInstruction.hasAttribute
---

{{APIRef("DOM")}}{{SeeCompatTable}}

The **`hasAttribute()`** method of the {{domxref("ProcessingInstruction")}} interface returns a
boolean value indicating whether the specified element has the
specified attribute or not.

## Syntax

```js-nolint
hasAttribute(name)
```

### Parameters

- `name`
  - : A string representing the name of the attribute.

### Return value

A boolean.

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

console.log(pi.hasAttribute("name"));
// logs:
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttributes()")}}
- {{domxref("ProcessingInstruction.getAttribute()")}}
- {{domxref("ProcessingInstruction.getAttributeNames()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.removeAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
