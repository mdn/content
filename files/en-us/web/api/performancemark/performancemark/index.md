---
title: "PerformanceMark: PerformanceMark() constructor"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
page-type: web-api-constructor
browser-compat: api.PerformanceMark.PerformanceMark
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`PerformanceMark()`** constructor creates a {{domxref("DOMHighResTimeStamp","timestamp")}} with the given name.

Unlike {{domxref("Performance.mark","performance.mark()")}}, performance marks created by the constructor aren't added to the browser's performance timeline. This means that calls to the {{domxref("Performance")}} interface's `getEntries*()` methods ({{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} or {{domxref("Performance.getEntriesByType","getEntriesByType()")}}) won't show entries for these marks.

## Syntax

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
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

A {{domxref("PerformanceMark")}} object.

### Exceptions

- {{jsxref("SyntaxError")}}: Thrown if the `name` given to this method already exists in the {{domxref("PerformanceTiming")}} interface.
- {{jsxref("TypeError")}}: Thrown if `startTime` is negative.

## Examples

The following example shows how {{domxref("PerformanceMark")}} entries are constructed and then aren't part of the browser's performance timeline.

```js
new PerformanceMark("squirrel");
new PerformanceMark("monkey");
new PerformanceMark("dog");

const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.mark","performance.mark()")}}
