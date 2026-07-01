---
title: "HTMLTrackElement: readyState property"
short-title: readyState
slug: Web/API/HTMLTrackElement/readyState
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.readyState
---

{{APIRef("HTML DOM")}}

The **`readyState`** read-only property of the {{domxref("HTMLTrackElement")}} interface returns a number representing the {{HTMLElement("track")}} element's text track readiness state:

0. NONE: The text track not loaded state.
1. LOADING: The text track loading state.
2. LOADED: The text track loaded state.
3. ERROR: The text track failed to load state.

## Value

A number; `0`, `1`, `2`, or `3`.

## Example

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.readyState); // 0, 1, 2, or 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement")}}
- {{domxref("HTMLMediaElement.readyState")}}
- {{HTMLElement("track")}}
