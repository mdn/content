---
title: Navigator.getVRDisplays()
slug: Web/API/Navigator/getVRDisplays
tags:
  - API
  - Experimental
  - HTML DOM
  - Media
  - Method
  - Navigator
  - Reference
  - VR
  - Virtual Reality
  - WebVR
  - getVRDisplays()
browser-compat: api.Navigator.getVRDisplays
---
{{DefaultAPISidebar("WebVR API")}}{{deprecated_header}}

The **`getVRDisplays()`** method of the
{{domxref("Navigator")}} interface returns a promise that resolves to an array of
{{domxref("VRDisplay")}} objects representing any available VR displays connected to the
computer.

## Syntax

```js
navigator.getVRDisplays().then(function(displays) {
  // Do something with the available VR displays
});
```

### Parameters

None.

### Return value

A promise that resolves to an array of {{domxref("VRDisplay")}} objects.

## Examples

See [`VRDisplay`](/en-US/docs/Web/API/VRDisplay#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> —
  demos, downloads, and other resources from the Mozilla VR team.
