---
title: "ProcessingInstruction: hasAttributes() method"
short-title: hasAttributes()
slug: Web/API/ProcessingInstruction/hasAttributes
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ProcessingInstruction.hasAttributes
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

The **`hasAttributes()`** method of the {{domxref("ProcessingInstruction")}}
interface returns a boolean value indicating whether the current element has any
attributes or not.

## Syntax

```js-nolint
hasAttributes()
```

### Parameters

None.

### Return value

A boolean.

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction("start", 'name="placeholder"');

const pi2 = document.createProcessingInstruction("start", "");

console.log(pi.hasAttributes());
console.log(pi2.hasAttributes());
// logs:
// true
// false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttribute()")}}
- {{domxref("ProcessingInstruction.getAttribute()")}}
- {{domxref("ProcessingInstruction.getAttributeNames()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.removeAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
