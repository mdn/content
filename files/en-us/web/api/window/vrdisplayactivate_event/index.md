---
title: 'Window: vrdisplayactivate event'
slug: Web/API/Window/vrdisplayactivate_event
tags:
  - Reference
  - WebVR
  - events
  - onvrdisplayactivate
  - vrdisplayactivate
browser-compat: api.Window.vrdisplayactivate_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplayactivate`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when a VR display is able to be presented to, for example if an HMD has been moved to bring it out of standby, or woken up by being put on.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplayactivate"
            >onvrdisplayactivate</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplayactivate` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplayactivate', function() {
  info.textContent = 'Display activated.';
  reportDisplays();
});
```

Or use the [`onvrdisplayactivate`](/en-US/docs/Web/API/Window/onvrdisplayactivate) event handler property:

```js
window.onvrdisplayactivate = function() {
  info.textContent = 'Display activated.';
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
