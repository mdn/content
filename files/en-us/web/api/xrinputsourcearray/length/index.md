---
title: XRInputSourceArray.length
slug: Web/API/XRInputSourceArray/length
tags:
  - API
  - AR
  - Input Sources
  - Inputs
  - Mixed
  - Property
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSourceArray
  - augmented
  - controllers
  - count
browser-compat: api.XRInputSourceArray.length
---
{{APIRef("WebXR Device API")}}

The read-only **`length`** property returns an integer value
indicating the number of items in the input source list represented by
the {{domxref("XRInputSourceArray")}} object.

## Value

An integer value indicating the number of {{domxref("XRInputSource")}} objects
representing WebXR input sources are includled in the array.

## Examples

In this example, a game that requires at least one input source
uses `length` to check this before proceeding to allow the user to play the
game.

```js
let sources = xrSession.inputSources;

if (sources.length === 0) {
  showAlertDialog("You need to have at least one controller to play Super Duper Shark Jump Fest 9000.",
                  [
                    { label: "Shop Now", url: "https://www.amazon.com/s?k=vr+controllers" },
                    { label: "Quit" handler: quitGame }
                  ]);
}
```

Here, if `length` is 0, a
hypothetical `showAlertDialog()` function is called with a prompt string
explaining the need for a controller, and an array of objects, each describing a button
and what should happen when it's clicked. The first takes the user to an Amazon.com
search for VR controllers, and the second calls a `quitGame()` function to
start shutting the game program down.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
