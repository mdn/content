---
title: XRAnchorSet
slug: Web/API/XRAnchorSet
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRAnchorSet
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

The **`XRAnchorSet`** interface exposes a collection of anchors. Its instances are returned by {{domxref("XRFrame.trackedAnchors")}} and are [`Set`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis).

## Instance properties

See {{jsxref("Set")}} for details.

## Instance methods

See {{jsxref("Set")}} for details.

## Examples

### Handling anchor tracking loss

```js
const trackedAnchors = frame.trackedAnchors;

for (const anchor of previousFrameAnchors) {
  if (!trackedAnchors.has(anchor)) {
    // Handle anchor tracking loss
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.trackedAnchors")}}
