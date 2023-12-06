---
title: "Performance: getEntriesByType() method"
short-title: getEntriesByType()
slug: Web/API/Performance/getEntriesByType
page-type: web-api-instance-method
browser-compat: api.Performance.getEntriesByType
---

{{APIRef("Performance API")}}

The **`getEntriesByType()`** method returns an array of {{domxref("PerformanceEntry")}} objects currently present in the performance timeline for a given _type_.

If you are interested in performance entries of certain name, see {{domxref("Performance.getEntriesByName", "getEntriesByName()")}}. For all performance entries, see {{domxref("Performance.getEntries", "getEntries()")}}.

> **Note:** This method does not notify you about new performance entries; you will only get entries that are present in the performance timeline at the time you call this method.
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
getEntriesByType(type)
```

### Parameters

- `type`
  - : The type of entry to retrieve such as "`mark`". The valid entry types are listed in {{domxref("PerformanceEntry.entryType")}}. The supported `entryTypes` can be retrieved using the static property {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}.

### Return value

An {{jsxref("Array")}} of {{domxref("PerformanceEntry")}} objects that have the specified `type`. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects have the specified `type`, or no argument is provided, an empty array is returned.

## Examples

### Logging resource entries

The following example logs all entries with the type "`resource`".

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
