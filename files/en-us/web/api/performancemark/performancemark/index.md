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
        - `devtools` {{optional_inline}} {{experimental_inline}}
          - : Some browsers have use a structured `devtools` object within the `detail` object as part of an Extensibility API that surfaces these in custom tracks in performance traces. See the [Chrome's Extensibility API documentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api) for more information.
            - `dataType` {{experimental_inline}}
              - : A string which must be set to `marker`. Identifies as a marker.
            - `color` {{optional_inline}} {{experimental_inline}}
              - : Defaults to `"primary"`. Must be one of `"primary"`, `"primary-light"`, `"primary-dark"`, `"secondary"`, `"secondary-light"`, `"secondary-dark"`, `"tertiary"`, `"tertiary-light"`, `"tertiary-dark"`, `"error"`.
            - `properties` {{optional_inline}} {{experimental_inline}}
              - : Array of key-value pairs. Values can be any JSON-compatible type.
            - `tooltipText` {{optional_inline}} {{experimental_inline}}
              - : Short description for tooltip.
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}} to use as the mark time. Defaults to {{domxref("performance.now()")}}.

### Return value

A {{domxref("PerformanceMark")}} object.

### Exceptions

- {{jsxref("SyntaxError")}}: Thrown if the `name` given to this method already exists in the {{domxref("PerformanceTiming")}} interface.
- {{jsxref("TypeError")}}: Thrown if `startTime` is negative.

## Examples

### Creating named markers

The following example shows how {{domxref("PerformanceMark")}} entries are constructed and then aren't part of the browser's performance timeline.

```js
new PerformanceMark("squirrel");
new PerformanceMark("monkey");
new PerformanceMark("dog");

const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 0
```

### DevTools Extensibility API

For browsers that support the [Extensibility API](https://developer.chrome.com/docs/devtools/performance/extension) you can use the `detail` parameter to provide more details in a `devtools` object that will be used to display this in performance profiles:

```js
// Marker indicating when the processed image was uploaded
performance.mark("Image Upload", {
  detail: {
    devtools: {
      dataType: "marker",
      color: "secondary",
      properties: [
        ["Image Size", "2.5MB"],
        ["Upload Destination", "Cloud Storage"],
      ],
      tooltipText: "Processed image uploaded",
    },
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.mark","performance.mark()")}}
