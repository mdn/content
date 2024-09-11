---
title: "XRSession: domOverlayState property"
short-title: domOverlayState
slug: Web/API/XRSession/domOverlayState
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRSession.domOverlayState
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The _read-only_ **`domOverlayState`** property of an `immersive-ar`
{{DOMxRef("XRSession")}} provides information about the DOM overlay, if the feature is enabled.

## Value

Returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if the DOM overlay feature is not supported or not enabled or an object containing information about the DOM overlay state with the following properties:

- `type`

  - : A string indicating how the DOM overlay is being displayed. Possible values:
    - `screen`
      - : The overlay is drawn on the entire screen-based device (for handheld AR devices).
    - `head-locked`
      - : The overlay is drawn at a head-locked UI that fills the renderable viewport and follows the user's head movement.
    - `floating`
      - : The overlay appears as a rectangle floating in space that's kept in front of the user. It doesn't necessarily fill up the entire space and/or is strictly head-locked.

## Examples

### Checking which DOM overlay got enabled

```js
if (session.domOverlayState) {
  console.log(session.domOverlayState.type);
} else {
  console.log("DOM overlay not supported or enabled!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.beforexrselect_event", "beforexrselect")}}
