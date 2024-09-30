---
title: "XRInputSourceArray: keys() method"
short-title: keys()
slug: Web/API/XRInputSourceArray/keys
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRInputSourceArray.keys
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`keys()`** method in the
{{domxref("XRInputSourceArray")}} interface returns a {{Glossary("JavaScript")}}
[`iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)
which can then be used to iterate over the keys used to reference each item in the array
of input sources.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A
JavaScript [`iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that
can be used to walk through the keys for each entry in the list of input sources. The
values returned by the iterator are the indexes of each entry in the list; that is, the
numbers 0, 1, 2, and so forth through the index of the last item in the list.

## Examples

This example snippet gets the list of inputs for a session and tries to handle each
type of input device it supports using.

```js
for (const inputIdx of xrSession.inputSources.keys()) {
  /* the keys are the indexes into the list of inputs */
  checkInput(xrSession.inputSources[inputIdx]);
}
```

Here,
[`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
is used to iterate over each of the keys. For each key, the input is retrieved using the
index with array notation: `xrSession.inputSources[inputIdx]`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The {{domxref("XRInputSourceArray")}} method {{domxref("XRInputSourceArray.values", "values()")}}
- The [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) method `keys()`
- {{domxref("XRInputSource")}}
