---
title: HMDVRDevice
slug: Web/API/HMDVRDevice
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.HMDVRDevice
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`HMDVRDevice`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents a head mounted display, providing access to information about each eye, and allowing us to modify the current field of view.

## Instance methods

- {{domxref("HMDVRDevice.getEyeParameters()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns current parameters for the eye specified as its argument ("left" or "right") — such as field of view information — stored in a {{domxref("VREyeParameters")}} object.
- {{domxref("HMDVRDevice.setFieldOfView()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Sets the field of view for both eyes.

## Instance properties

_This interface doesn't define any properties of its own, but it does inherit the properties of its parent interface, {{domxref("VRDisplay")}}._

- `VRDisplay.hardwareUnitId` {{ReadOnlyInline}}
  - : Returns the distinct hardware ID for the overall hardware unit that this `VRDevice` is a part of. All devices that are part of the same physical piece of hardware will have the same `hardwareUnitId`.
- {{domxref("VRDisplay.displayId")}} {{ReadOnlyInline}}
  - : Returns the ID for this specific `VRDevice`. The ID shouldn't change across browser restarts, allowing configuration data to be saved based on it.
- {{domxref("VRDisplay.displayName")}} {{ReadOnlyInline}}
  - : A human-readable name to identify the `VRDevice`.

## Examples

The following example, taken from the WebVR spec, finds the first available `HMDVRDevice` and its associated {{domxref("PositionSensorVRDevice")}}, if it has one.

```js
navigator.getVRDevices().then((devices) => {
  for (const device of devices) {
    if (device instanceof HMDVRDevice) {
      gHMD = device;
      break;
    }
  }

  if (gHMD) {
    for (const device of devices) {
      if (
        device instanceof PositionSensorVRDevice &&
        device.hardwareUnitId === gHMD.hardwareUnitId
      ) {
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

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
