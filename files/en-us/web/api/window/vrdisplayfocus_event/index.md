---
title: 'Window: vrdisplayfocus event'
slug: Web/API/Window/vrdisplayfocus_event
tags:
  - Reference
  - WebVR
  - events
  - onvrdisplayfocus
  - vrdisplayfocus
browser-compat: api.Window.vrdisplayfocus_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplayfocus`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when presentation to a VR display has resumed after being blurred.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplayfocus"
            >onvrdisplayfocus</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplayfocus` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplayfocus', function() {
  info.textContent = 'Display focused.';
  reportDisplays();
});
```

Or use the [`onvrdisplayfocus`](/en-US/docs/Web/API/Window/onvrdisplayfocus) event handler property:

```js
window.onvrdisplayfocus = function() {
  info.textContent = 'Display focused.';
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
