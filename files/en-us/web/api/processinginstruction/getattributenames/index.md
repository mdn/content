---
title: "ProcessingInstruction: getAttributeNames() method"
short-title: getAttributeNames()
slug: Web/API/ProcessingInstruction/getAttributeNames
page-type: web-api-instance-method
browser-compat: api.ProcessingInstruction.getAttributeNames
---

{{APIRef("DOM")}}

The **`getAttributeNames()`** method of the
{{domxref("ProcessingInstruction")}} interface returns the attribute names of the processing instruction as an
{{jsxref("Array")}} of strings. If the processing instruction has no attributes it returns an empty
array.

## Syntax

```js-nolint
getAttributeNames()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of strings.

## Description

Using `getAttributeNames()` along with
{{domxref("ProcessingInstruction.getAttribute","getAttribute()")}} is a memory-efficient and
performant alternative to accessing `ProcessingInstruction.data`.

The names returned by **`getAttributeNames()`** are _qualified_ attribute names, meaning that attributes with a namespace prefix have their names returned with that namespace prefix (_not_ the actual namespace), followed by a colon, followed by the attribute name (for example, **`xlink:href`**). Any attributes without a namespace prefix have their names returned as-is (for example, **`href`**).

## Examples

### Basic usage

```js
const pi = document.createProcessingInstruction(
  "start",
  'name="placeholder" more="info"',
);

console.log(pi.getAttributeNames());
// logs:
// ['name', 'more']

// Iterate over processing instruction's attributes
for (const name of pi.getAttributeNames()) {
  const value = pi.getAttribute(name);
  console.log(name, value);
}
// logs:
// name placeholder
// more info
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ProcessingInstruction.hasAttribute()")}}
- {{domxref("ProcessingInstruction.hasAttributes()")}}
- {{domxref("ProcessingInstruction.getAttribute()")}}
- {{domxref("ProcessingInstruction.setAttribute()")}}
- {{domxref("ProcessingInstruction.removeAttribute()")}}
- {{domxref("ProcessingInstruction.toggleAttribute()")}}
