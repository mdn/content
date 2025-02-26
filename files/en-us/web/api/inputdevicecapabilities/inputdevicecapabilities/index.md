---
title: "InputDeviceCapabilities: InputDeviceCapabilities() constructor"
short-title: InputDeviceCapabilities()
slug: Web/API/InputDeviceCapabilities/InputDeviceCapabilities
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.InputDeviceCapabilities.InputDeviceCapabilities
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

The `InputDeviceCapabilities()` constructor creates a new
{{domxref("InputDeviceCapabilities")}} object provides information about the physical
device responsible for generating a touch event.

## Syntax

```js-nolint
new InputDeviceCapabilities()
new InputDeviceCapabilities(InputDeviceCapabilitiesInit)
```

### Parameters

- `InputDeviceCapabilitiesInit` {{optional_inline}}

  - : A dictionary object containing a set of device capabilities. It contains the
    following property.

    - `fireTouchEvents`: A boolean value that indicates
      whether the device dispatches touch events.

### Return value

An instance of the {{domxref("InputDeviceCapabilities")}} interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
