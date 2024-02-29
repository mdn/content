---
title: "Gamepad: mapping property"
short-title: mapping
slug: Web/API/Gamepad/mapping
page-type: web-api-instance-property
browser-compat: api.Gamepad.mapping
---

{{APIRef("Gamepad API")}}{{SecureContext_Header}}

The **`Gamepad.mapping`** property of the
{{domxref("Gamepad")}} interface returns a string indicating whether the browser has
remapped the controls on the device to a known layout.

The currently supported known layouts are:

- "standard" for the [standard gamepad](https://w3c.github.io/gamepad/#remapping).
- "xr-standard for the [standard XR gamepad](https://immersive-web.github.io/webxr-gamepads-module/#xr-standard-heading). See also {{domxref("XRInputSource.gamepad")}}.

## Examples

```js
let gp = navigator.getGamepads()[0];
console.log(gp.mapping);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

[Using the Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
