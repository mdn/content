---
title: performance.mark()
slug: Web/API/Performance/mark
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.mark
---

{{APIRef("Performance API")}}

The **`mark()`** method creates a
{{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance entry
buffer_ with the given name.

The application defined timestamp can also be retrieved by one of the
{{domxref("Performance")}} interface's `getEntries*()` methods
({{domxref("Performance.getEntries","getEntries()")}},
{{domxref("Performance.getEntriesByName","getEntriesByName()")}} or
{{domxref("Performance.getEntriesByType","getEntriesByType()")}}).

The `mark()'s` stores its data internally as
{{domxref("PerformanceEntry")}}.

{{AvailableInWorkers}}

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameters

- `name`
  - : A string representing the name of the mark.
- `markOptions` {{optional_inline}}
  - : An object for specifying a timestamp and additional metadata for the mark.
    - `detail` {{optional_inline}}
      - : Arbitrary metadata to include in the mark. Defaults to `null`.
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}} to use as the mark time. Defaults to {{domxref("performance.now()")}}.

### Return value

The {{domxref("PerformanceMark")}} entry that was created.

### Exceptions

- {{jsxref("SyntaxError")}}: Thrown if the `name` given to this method already exists in the {{domxref("PerformanceTiming")}} interface.
- {{jsxref("TypeError")}}: Thrown if `startTime` is negative.

## Examples

The following example shows how to use `mark()` to create and retrieve
{{domxref("PerformanceMark")}} entries.

```js
// Create a bunch of marks.
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// Get all of the PerformanceMark entries.
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 6

// Get all of the "monkey" PerformanceMark entries.
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries.length);
// 2

// Clear out all of the marks.
performance.clearMarks();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
