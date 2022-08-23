---
title: TimeRanges.end()
slug: Web/API/TimeRanges/end
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Media
  - Method
  - Reference
  - TimeRanges
browser-compat: api.TimeRanges.end
---
{{APIRef("DOM")}}

The **`end()`** method of the {{domxref("TimeRanges")}} interface returns the time offset at which a specified time range ends.

## Syntax

```js
end(index)
```

### Parameters

- `index`
  - : The range number to return the ending time for.

### Return value

A number.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the specified index doesn't correspond to an existing range.

## Examples

Given a video element with the ID `"myVideo"`:

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // only one range
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
