---
title: 'Window: vrdisplaydeactivate event'
slug: Web/API/Window/vrdisplaydeactivate_event
tags:
  - Reference
  - WebVR
  - events
  - onvrdisplaydeactivate
  - vrdisplaydeactivate
browser-compat: api.Window.vrdisplaydeactivate_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplaydeactivate`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a VR display can no longer be presented to, for example if an HMD has gone into standby or sleep mode due to a period of inactivity.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplaydeactivate"
            >onvrdisplaydeactivate</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplaydeactivate` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplaydeactivate', function() {
  info.textContent = 'Display deactivated.';
  reportDisplays();
});
```

Or use the [`onvrdisplaydeactivate`](/en-US/docs/Web/API/Window/onvrdisplaydeactivate) event handler property:

```js
window.onvrdisplaydeactivate = function() {
  info.textContent = 'Display deactivated.';
  reportDisplays();
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
