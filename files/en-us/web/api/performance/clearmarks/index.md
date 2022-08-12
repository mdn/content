---
title: performance.clearMarks()
slug: Web/API/Performance/clearMarks
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.clearMarks
---
{{APIRef("User Timing API")}}

The **`clearMarks()`** method removes the _named mark_
from the browser's performance entry buffer. If the method is called with no arguments,
all {{domxref("PerformanceEntry","performance entries")}} with an
{{domxref("PerformanceEntry.entryType","entry type")}} of "`mark`" will be
removed from the performance entry buffer.

{{AvailableInWorkers}}

## Syntax

```js
clearMarks()
clearMarks(name)
```

### Parameters

- `name` {{optional_inline}}
  - : A string representing the name of the timestamp. If this argument
    is omitted, all {{domxref("PerformanceEntry","performance entries")}} with an
    {{domxref("PerformanceEntry.entryType","entry type")}} of "`mark`" will be
    removed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example shows both uses of the `clearMarks()` method.

```js
// Create a small helper to show how many PerformanceMark entries there are.
function logMarkCount() {
  console.log(
    `Found this many entries: ${performance.getEntriesByType("mark").length}`
  );
}

// Create a bunch of marks.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

logMarkCount() // "Found this many entries: 6"

// Delete just the "squirrel" PerformanceMark entries.
performance.clearMarks('squirrel');
logMarkCount() // "Found this many entries: 4"

// Delete all of the PerformanceMark entries.
performance.clearMarks();
logMarkCount() // "Found this many entries: 0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
