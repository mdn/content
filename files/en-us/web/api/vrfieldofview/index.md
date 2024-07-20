---
title: VRFieldOfView
slug: Web/API/VRFieldOfView
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.VRFieldOfView
---

{{APIRef("WebVR API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`VRFieldOfView`** interface of the [WebVR API](/en-US/docs/Web/API/WebVR_API) represents a field of view defined by 4 different degree values describing the view from a center point.

> **Note:** This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). It has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/).

## Instance properties

- {{domxref("VRFieldOfView.upDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : The number of degrees upwards that the field of view extends in.
- {{domxref("VRFieldOfView.rightDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : The number of degrees to the right that the field of view extends in.
- {{domxref("VRFieldOfView.downDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : The number of degrees downwards that the field of view extends in.
- {{domxref("VRFieldOfView.leftDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : The number of degrees to the left that the field of view extends in.

## Examples

```js
const info = document.querySelector("p");
const list = document.querySelector("ul");
let vrDisplay;

if (navigator.getVRDisplays) {
  reportFieldOfView();
} else {
  info.textContent = "WebVR API not supported by this browser.";
}

function reportFieldOfView() {
  navigator.getVRDisplays().then((displays) => {
    vrDisplay = displays[0];
    const lEye = vrDisplay.getEyeParameters("left");
    const rEye = vrDisplay.getEyeParameters("right");
    // lEye and rEye are VREyeParameters objects

    const lFOV = lEye.fieldOfView;
    const rFOV = rEye.fieldOfView;
    // lFOV and rFOV are VRFieldOfView objects

    const listitem1 = document.createElement("li");
    const listitem2 = document.createElement("li");

    listitem1.innerText = `
Offset: ${lEye.offset}
Render width: ${lEye.renderWidth}
Render height: ${lEye.renderHeight}
Up degrees: ${lFOV.upDegrees}
Right degrees: ${lFOV.rightDegrees}
Down degrees: ${lFOV.downDegrees}
Left degrees: ${lFOV.leftDegrees}`;
    listitem1.insertBefore(
      document.createElement("strong"),
      listitem1.firstChild,
    ).textContent = "Left eye parameters";

    listitem2.innerText = `
Offset: ${rEye.offset}
Render width: ${rEye.renderWidth}
Render height: ${rEye.renderHeight}
Up degrees: ${rFOV.upDegrees}
Right degrees: ${rFOV.rightDegrees}
Down degrees: ${rFOV.downDegrees}
Left degrees: ${rFOV.leftDegrees}`;
    listitem2.insertBefore(
      document.createElement("strong"),
      listitem2.firstChild,
    ).textContent = "Right eye parameters";

    list.appendChild(listitem1);
    list.appendChild(listitem2);
  });
}
```

## Specifications

This interface was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.

Until all browsers have implemented the new [WebXR APIs](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals), it is recommended to rely on frameworks, like [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), or [Three.js](https://threejs.org/), or a [polyfill](https://github.com/immersive-web/webxr-polyfill), to develop WebXR applications that will work across all browsers [\[1\]](https://developer.oculus.com/documentation/web/port-vr-xr/).

## Browser compatibility

{{Compat}}

## See also

- [WebVR API](/en-US/docs/Web/API/WebVR_API)
