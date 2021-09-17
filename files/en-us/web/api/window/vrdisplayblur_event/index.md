---
title: 'Window: vrdisplayblur event'
slug: Web/API/Window/vrdisplayblur_event
tags:
  - Experimental
  - Reference
  - WebVR
  - events
  - onvrdisplayblur
  - vrdisplayblur
browser-compat: api.Window.vrdisplayblur_event
---
{{APIRef("Window")}}{{Deprecated_Header}}

The **`vrdisplayblur`** event of the [WebVR API](/en-US/docs/Web/API/WebVR_API) is fired when presentation to a VR display has been paused for some reason by the browser, OS, or VR hardware — for example, while the user is interacting with a system menu or browser, to prevent tracking or loss of experience.

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
          ><a href="/en-US/docs/Web/API/Window/onvrdisplayblur"
            >onvrdisplayblur</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `vrdisplayblur` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
window.addEventListener('vrdisplayblur', function() {
  info.textContent = 'Display unfocused.';
  reportDisplays();
});
```

Or use the [`onvrdisplayblur`](/en-US/docs/Web/API/Window/onvrdisplayblur) event handler property:

```js
window.onvrdisplayblur = function() {
  info.textContent = 'Display unfocused.';
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
