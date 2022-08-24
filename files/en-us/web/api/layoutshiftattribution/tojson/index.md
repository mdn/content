---
title: LayoutShiftAttribution.toJSON()
slug: Web/API/LayoutShiftAttribution/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - toJSON
  - LayoutShiftAttribution
  - Experimental
browser-compat: api.LayoutShiftAttribution.toJSON
---
{{APIRef("Layout Instability API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("LayoutShiftAttribution")}} interface is a _serializer_ that returns a JSON representation of the `LayoutShiftAttribution` object.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("LayoutShiftAttribution")}} object.

## Examples

The following example prints a JSON representation of the first item in {{domxref("LayoutShift.sources")}} to the console.

```js
new PerformanceObserver((list) => {
  for (const {sources} of list.getEntries()) {
    if (sources) {
      console.log(sources[0].toJSON());
    }
  }
}).observe({type: 'layout-shift', buffered: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
