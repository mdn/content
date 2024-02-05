---
title: "XRInputSourceArray: entries() method"
short-title: entries()
slug: Web/API/XRInputSourceArray/entries
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRInputSourceArray.entries
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The {{domxref("XRInputSourceArray")}} interface's
**`entries()`** method returns a JavaScript
[`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
which can then be used to iterate over the key/value pairs in the input source
array. Each item in the array is an {{domxref("XRInputSource")}} object.

Most frequently, you will use this in tandem with statements such as
[`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

An [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
which can be used to walk through the list of `XRInputSource` objects
included in the input source array.

## Examples

This example snippet gets the list of inputs for a session and tries to handle each
type of input device it supports using.

```js
let sources = xrSession.inputSources;

for (const input of sources.entries()) {
  if (input.gamepad) {
    checkGamepad(input.gamepad);
  } else if (
    input.targetRayMode === "tracked-pointer" &&
    input.handedness === player.handedness
  ) {
    /* Handle main hand controller */
    handleMainHandInput(input);
  } else {
    /* Handle other inputs */
  }
}
```

For each input in the list, gamepad inputs are dispatched to
a `checkGamepad()` with the input's {{domxref("Gamepad")}} object, taken from
its {{domxref("XRInputSource.gamepad", "gamepad")}} property, as an input

For other devices, we look for `tracked-pointer` devices in the player's
main hand, dispatching those to a `handleMainHandInput()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
