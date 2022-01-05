---
title: 'Window: vrdisplaydisconnect event'
slug: Web/API/Window/vrdisplaydisconnect_event
tags:
  - Event
  - Reference
  - WebVR
  - onvrdisplaydisconnect
  - vrdisplaydisconnect
browser-compat: api.Window.vrdisplaydisconnect_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplaydisconnect`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a compatible VR display is disconnected from the computer.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("VRDisplayEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/Window/onvrdisplaydisconnect"
            >onvrdisplaydisconnect</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplaydisconnect` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

> **Note:** This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

```js
window.addEventListener('vrdisplaydisconnect', function() {
  info.textContent = 'Display disconnected.';
  reportDisplays();
});
```

Or use the [`onvrdisplaydisconnect`](/en-US/docs/Web/API/Window/onvrdisplaydisconnect) event handler property:

```js
window.onvrdisplaydisconnect = function() {
  info.textContent = 'Display disconnected.';
  reportDisplays();
);
```

## Specifications

This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR Device API](https://immersive-web.github.io/webxr/), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
