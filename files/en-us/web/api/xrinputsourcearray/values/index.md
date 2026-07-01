---
title: "XRInputSourceArray: values() method"
short-title: values()
slug: Web/API/XRInputSourceArray/values
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRInputSourceArray.values
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The {{domxref("XRInputSourceArray")}}
method **`values()`** returns a {{Glossary("JavaScript")}}
[`iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator)
that can walk over the list of {{domxref("XRInputSource")}} objects contained in the
array, from first to last.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A
JavaScript [`iterator`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that
can be used to walk through the list of {{domxref("XRInputSource")}} objects in the
array, starting with the first entry (at index 0) and proceeding straight through the
list.

## Examples

This example snippet walks through each input and calls the
function `checkInput()` with each returned value.

```js
for (const source of xrSession.inputSources.values()) {
  checkInput(source);
}
```

Here,
[`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
is used to iterate over the array's contents. Each pass through the loop,
`source` is the next {{domxref("XRInputSource")}} in the list. The loop exits
once every input has been delivered to `checkInput()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The {{domxref("XRInputSourceArray")}} method {{domxref("XRInputSourceArray.keys", "keys()")}}
- The
  [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) method `values()`
- {{domxref("XRInputSource")}}
