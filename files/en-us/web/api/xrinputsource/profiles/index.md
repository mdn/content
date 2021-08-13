---
title: XRInputSource.profiles
slug: Web/API/XRInputSource/profiles
tags:
  - API
  - AR
  - Configuration
  - Input
  - Property
  - Read-only
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSource
  - augmented
  - profile
browser-compat: api.XRInputSource.profiles
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRInputSource")}} property **`profiles`** returns an array of strings, each describing a configuration profile for the input source. The profile strings are listed in order of specificity, with the most specific profile listed first.

> **Note:** The `profiles` list is always empty when the WebXR
> session is in inline mode.

## Syntax

```js
let profileList = xrInputSource.profiles;
```

### Value

An array of {{domxref("DOMString")}} objects, each describing one configuration profile
for the input device represented by the `XRInputSource` object. Each input
profile specifies the preferred visual representation and behavior of the input source.

## Usage notes

### Input profile names

An input profile name is a string describing a visual representation and behavior the
input source may be configured to use. Each string:

- Has no spaces; instead, words are separated by hyphen ("-") characters
- If the platform makes it available, the USB vendor and product ID may be provided
  but cannot be relied upon
- Does not uniquely identify a specific device; rather, it identifies a configuration
  that the product is capable of using
- Does not provide information about handedness of the device, if applicable

The [WebXR
Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry) is used by device developers and browser developers to
attempt to ensure that a given device will report the same profile strings regardless of
which browser or other {{Glossary("user agent")}} you use.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Inputs and input sources](/en-US/docs/Web/API/WebXR_Device_API/Inputs)
- [Using gamepads in WebXR
  applications](/en-US/docs/Web/WebXR%20Device%20API/Gamepads)
