---
title: "TimeRanges: length property"
short-title: length
slug: Web/API/TimeRanges/length
page-type: web-api-instance-property
browser-compat: api.TimeRanges.length
---

{{APIRef("DOM")}}

The **`TimeRanges.length`** read-only property returns the
number of ranges in the object.

## Value

A number.

## Examples

Given a video element with the ID "myVideo":

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // Only one range
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // The one range starts at the beginning and ends at
    // the end of the video, so the whole thing is loaded
  }
}
```

This example looks at the time ranges and looks to see if the entire video has been
loaded.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
