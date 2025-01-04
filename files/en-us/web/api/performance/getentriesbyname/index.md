---
title: "Performance: getEntriesByName() method"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
page-type: web-api-instance-method
browser-compat: api.Performance.getEntriesByName
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`getEntriesByName()`** method returns an array of {{domxref("PerformanceEntry")}} objects currently present in the performance timeline with the given _name_ and _type_.

If you are interested in performance entries of certain types, see {{domxref("Performance.getEntriesByType", "getEntriesByType()")}}. For all performance entries, see {{domxref("Performance.getEntries", "getEntries()")}}.

> [!NOTE]
> This method does not notify you about new performance entries; you will only get entries that are present in the performance timeline at the time you call this method.
> To receive notifications about entries as they become available, use a {{domxref("PerformanceObserver")}}.

The following entry types are not supported by this method at all and won't be returned even if entries for these types might exist:

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

To access entries of these types, you must use a {{domxref("PerformanceObserver")}} instead.

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameters

- `name`
  - : The name of the entries to retrieve.
- `type` {{optional_inline}}
  - : The type of entries to retrieve such as `"mark"`. The valid entry types are
    listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

An {{jsxref("Array")}} of {{domxref("PerformanceEntry")}} objects that have the specified `name` and `type`.
The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects meet the
specified criteria, an empty array is returned.

## Examples

### Logging performance markers

The following example logs all {{domxref("PerformanceMark")}} objects named `"debug-mark"`.

```js
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByType()")}}
