---
title: Touch.identifier
slug: Web/API/Touch/identifier
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Identifier
  - Property
  - Read-only
  - Reference
  - touch
browser-compat: api.Touch.identifier
---
{{ APIRef("Touch Events") }}

The **`Touch.identifier`** returns a value uniquely identifying
this point of contact with the touch surface. This value remains consistent for every
event involving this finger's (or stylus's) movement on the surface until it is lifted
off the surface.

## Value

A `long` that represents the unique ID of the {{ domxref("Touch") }} object.

## Examples

```js
someElement.addEventListener('touchmove', (e) => {
// Iterate through the list of touch points that changed
// since the last event and print each touch point's identifier.
  for (let i = 0; i < e.changedTouches.length; i++) {
    console.log(`changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`);
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
