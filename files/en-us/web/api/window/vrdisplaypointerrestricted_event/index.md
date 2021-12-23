---
title: 'Window: vrdisplaypointerrestricted event'
slug: Web/API/Window/vrdisplaypointerrestricted_event
tags:
  - Reference
  - Web VR
  - Window
  - events
  - vrdisplaypointerrestricted
browser-compat: api.Window.vrdisplaypointerrestricted_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplaypointerrestricted`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when the VR display's pointer input is restricted to consumption via a [pointerlocked element](/en-US/docs/Web/API/Pointer_Lock_API).

> **Note:** This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted"
            >onvrdisplaypointerrestricted</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplaypointerrestricted` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplaypointerrestricted', function() {
  // Run code to handle pointer lock
});
```

Or use the [`onvrdisplaypointerrestricted`](/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted) event handler property:

```js
window.onvrdisplaypointerrestricted = function() {
  // Run code to handle pointer lock
};
```

## Specifications

This event was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR Device API](https://immersive-web.github.io/webxr/), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/oculus-browser/browser-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API homepage](/en-US/docs/Web/API/WebVR_API)
- <https://mixedreality.mozilla.org/> — demos, downloads, and other resources from the Mozilla VR team.
