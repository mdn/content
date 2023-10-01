---
title: "XRInputSource: profiles property"
short-title: profiles
slug: Web/API/XRInputSource/profiles
page-type: web-api-instance-property
browser-compat: api.XRInputSource.profiles
---

{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRInputSource")}} property **`profiles`** returns an array of strings, each describing a configuration profile for the input source. The profile strings are listed in order of specificity, with the most specific profile listed first.

> **Note:** The `profiles` list is always empty when the WebXR
> session is in inline mode.

## Value

An array of strings, each describing one configuration profile
for the input device represented by the `XRInputSource` object. Each input
profile specifies the preferred visual representation and behavior of the input source.

### Input profile names

An input profile name is a string describing a visual representation and behavior the
input source may be configured to use. Each string:

- Has no spaces; instead, words are separated by hyphen ("-") characters
- If the platform makes it available, the USB vendor and product ID may be provided
  but cannot be relied upon
- Does not uniquely identify a specific device; rather, it identifies a configuration
  that the product is capable of using
- Does not provide information about handedness of the device, if applicable

The [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) is used by device developers and browser developers to
attempt to ensure that a given device will report the same profile strings regardless of
which browser or other {{Glossary("user agent")}} you use.

### Generic input profile names

The following input profile names are generic and can serve as fallbacks that describe the devices in the roughest sense.

- generic-button
- generic-hand-select-grasp
- generic-hand-select
- generic-hand
- generic-touchpad
- generic-touchscreen
- generic-trigger-squeeze-thumbstick
- generic-trigger-squeeze-touchpad-thumbstick
- generic-trigger-squeeze-touchpad
- generic-trigger-squeeze
- generic-trigger-thumbstick
- generic-trigger-touchpad-thumbstick
- generic-trigger-touchpad
- generic-trigger

## Examples

The list in `profiles` is in order of reverse specificity; that is, the most precise description is first, and the least precise description is last. The first entry in the list is typically indicative of the precise model of the controller, or of a model with which the controller is compatible.

For example, entry 0 in `profiles` for an Oculus Touch controller is `oculus-touch`. The next entry is `generic-trigger-squeeze-thumbstick`, indicating a generic device with a trigger, a squeeze control, and a thumbstick. While the Oculus Touch controller actually has a thumbpad rather than a thumbstick, the overall description is "close enough" that the details within the profile matching the name will let the controller be interpreted usefully.

```js
inputSource.profiles;
// ['oculus-touch', 'generic-trigger-squeeze-thumbstick']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
