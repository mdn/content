---
title: "XRInputSourceArray: forEach() method"
short-title: forEach()
slug: Web/API/XRInputSourceArray/forEach
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.XRInputSourceArray.forEach
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The {{domxref("XRInputSourceArray")}}
method **`forEach()`** executes the specified callback once for
each input source in the array, starting at index 0 and progressing until the end of the
list.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameters

- `callback`

  - : A function to execute once for each entry in the
    array `xrInputSourceArray`. The callback accepts up to three parameters:

    - `currentValue`
      - : A {{domxref("XRInputSource")}} object which is the value of the item from within
        the `xrInputSourceArray` which is currently being processed.
    - `currentIndex` {{Optional_Inline}}
      - : An integer value providing the index into the array at which the element given
        by `currentValue` is located. If you don't need to know the index
        number, you can omit this.
    - `sourceList` {{Optional_Inline}}
      - : The {{domxref("XRInputSourceArray")}} object which is being processed. If you
        don't need this information, you may omit this.

- `thisArg` {{Optional_Inline}}
  - : The value to be used for
    [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)
    while executing the callback. Note that if you use [arrow function notation](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`) to provide the callback, you can
    omit `thisArg`, since all arrow functions lexically bind `this`.

### Return value

Undefined.

## Examples

This example snippet gets the list of inputs for a session and tries to handle each
type of input device it supports using.

```js
let inputSources = xrSession.inputSources;

inputSources.forEach((input) => {
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
});
```

For each input in the list, the callback dispatches gamepad inputs to
a `checkGamepad()` with the input's {{domxref("Gamepad")}} object, taken from
its {{domxref("XRInputSource.gamepad", "gamepad")}} property, as an input

For other devices, we look for `tracked-pointer` devices in the player's
main hand, dispatching those to a `handleMainHandInput()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- The
  [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) method `forEach()`
- {{domxref("XRInputSource")}}
