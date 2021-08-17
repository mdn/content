---
title: 'XRSystem: ondevicechange'
slug: Web/API/XRSystem/ondevicechange
tags:
  - AR
  - Augmented Reality
  - Event Handler
  - Experimental
  - VR
  - Virtual Reality
  - WebXR
  - WebXR Device API
  - XR
  - XRSystem
  - ondevicechange
browser-compat: api.XRSystem.ondevicechange
---
{{APIRef("WebXR Device API")}}

The **`ondevicechange`** property of the
{{domxref("XRSystem")}} interface is passed a {{Event("devicechange")}} event whenever
availability of an immersive device changes. The event that is fired is a "simple event"
that implements the [`Event`](/en-US/docs/Web/API/Event "The Event interface represents an event which takes place in the DOM.") interface.

## Syntax

```js
navigator.xr.ondevicechange = function(event) { ... };
```

### Value

{{jsxref('undefined')}}

## Example

```js
navigator.xr.ondevicechange = function(ev) {
  console.log("The availability of immersive XR devices has changed.")
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event")}}
