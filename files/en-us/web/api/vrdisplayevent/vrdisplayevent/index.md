---
title: VRDisplayEvent()
slug: Web/API/VRDisplayEvent/VRDisplayEvent
tags:
  - API
  - Constructor
  - Deprecated
  - Reference
  - VR
  - VRDisplayEvent
  - Virtual Reality
  - WebVR
browser-compat: api.VRDisplayEvent.VRDisplayEvent
---
{{APIRef("WebVR API")}}{{Deprecated_Header}}

The **`VRDisplayEvent()`** constructor creates a {{domxref("VRDisplayEvent")}} object instance.

> **Note:** This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Syntax

```js
new VRDisplayEvent(type, eventInitDict);
```

### Parameters

- _type_
  - : A {{domxref("DOMString")}} describing the type of event object you want to create.
- _eventInitDict_

  - : A object containing initialization options to use when creating the constructor. These are:

    - `display`
      - : A property containing the {{domxref("VRDisplay")}} the event is to be associated with.
    - `reason`
      - : A property containing a string representing the human-readable reason why the event is to be fired (see {{domxref("VRDisplayEvent.reason")}}).

## Examples

```js
var myEventObject = new VRDisplayEvent('custom', {
  display: vrDisplay,
  reason: 'Custom reason'
});
```

## Specifications

This constructor was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
