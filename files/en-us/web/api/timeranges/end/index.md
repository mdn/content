---
title: TimeRanges.end()
slug: Web/API/TimeRanges/end
tags:
  - API
  - HTML DOM
  - Media
  - Method
  - NeedsBrowserCompatibility
  - Reference
  - TimeRanges
browser-compat: api.TimeRanges.end
---
{{APIRef("DOM")}}

Returns the time offset at which a specified time range ends.

## Syntax

```js
endTime = TimeRanges.end(index)
```

### Parameters

- `index` is the range number to return the ending time for.

### Exceptions

- INDEX_SIZE_ERR
  - : A `DOMException` thrown if the specified index doesn't correspond to an
    existing range.

## Example

Given a video element with the ID "myVideo":

```js
var v = document.getElementById("myVideo");

var buf = v.buffered;

var numRanges = buf.length;

if (buf.length == 1) {
  // only one range
  if (buf.start(0) == 0 && buf.end(0) == v.duration) {
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
