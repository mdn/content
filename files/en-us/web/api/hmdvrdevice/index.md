---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
tags:
  - API
  - Experimental
  - HMDVRDevice
  - Interface
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - Deprecated
browser-compat: api.HMDVRDevice
---
{{deprecated_header}}{{APIRef("WebVR API")}}{{SeeCompatTable}}

The **`HMDVRDevice`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents a head mounted display, providing access to information about each eye, and allowing us to modify the current field of view.

## Methods

- {{domxref("HMDVRDevice.getEyeParameters()")}}
  - : Returns current parameters for the eye specified as its argument ("left" or "right") — such as field of view information — stored in a {{domxref("VREyeParameters")}} object.
- {{domxref("HMDVRDevice.setFieldOfView()")}}
  - : Sets the field of view for both eyes.

## Properties

_This interface doesn't define any properties of its own, but it does inherit the properties of its parent interface, {{domxref("VRDisplay")}}._

- {{domxref("VRDisplay.hardwareUnitId")}} {{readonlyInline}}
  - : Returns the distinct hardware ID for the overall hardware unit that this `VRDevice` is a part of. All devices that are part of the same physical piece of hardware will have the same `hardwareUnitId`.
- {{domxref("VRDisplay.displayId")}} {{readonlyInline}}
  - : Returns the ID for this specific `VRDevice`. The ID shouldn’t change across browser restarts, allowing configuration data to be saved based on it.
- {{domxref("VRDisplay.displayName")}} {{readonlyInline}}
  - : A human-readable name to identify the `VRDevice`.

## Examples

The following example, taken from the WebVR spec, finds the first available `HMDVRDevice` and its associated {{domxref("PositionSensorVRDevice")}}, if it has one.

```js
navigator.getVRDevices().then(function(devices) {
  for (var i = 0; i < devices.length; ++i) {
    if (devices[i] instanceof HMDVRDevice) {
      gHMD = devices[i];
      break;
    }
  }

  if (gHMD) {
    for (var i = 0; i < devices.length; ++i) {
      if (devices[i] instanceof PositionSensorVRDevice && devices[i].hardwareUnitId === gHMD.hardwareUnitId) {
        gPositionSensor = devices[i];
        break;
      }
    }
  }
});
```

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API).
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
