---
title: "XRLightProbe: reflectionchange event"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRLightProbe.reflectionchange_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The WebXR **`reflectionchange`** event fires each time the estimated reflection cube map changes. This happens in response to use movements through different lighting conditions or to direct changes to lighting itself. This event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("reflectionchange", (event) => {});

onreflectionchange = (event) => {};
```

## Event type

{{domxref("Event")}}.

## Examples

### Using the `reflectionchange` event

Whenever the `reflectionchange` event fires on a light probe, you can retrieve an updated cube map by calling {{domxref("XRWebGLBinding.getReflectionCubeMap()")}}. This is less expensive than retrieving lighting information with every {{domxref("XRFrame")}}.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### The `onreflectionchange` event handler property

The `reflectionchange` event is also available using the `onreflectionchange` event handler property.

```js
lightProbe.onreflectionchange = (event) => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
