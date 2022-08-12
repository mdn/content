---
title: PerformanceResourceTiming.initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.initiatorType
---
{{APIRef("Resource Timing API")}}

The **`initiatorType`** read-only property is a
string that represents the _type_ of resource that
initiated the performance event.

The value of this string is as follows:

- If the initiator is a {{domxref("Element")}}, the property returns the element's
  {{domxref("Element.localName","localName")}}.
- If the initiator is a {{domxref("CSS")}} resource, the property returns
  "`css`".
- If the initiator is a {{domxref("XMLHttpRequest")}} object, the property returns
  "`xmlhttprequest`".
- If the initiator is a {{domxref("PerformanceNavigationTiming")}} object, the
  property returns an empty string (`""`).

{{AvailableInWorkers}}

## Value

A string representing the _type_ of resource that
initiated the performance event, as specified above.

## Examples

```js
function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  const p = performance.getEntriesByType("resource");
  for (let i = 0; i < p.length; i++) {
    print_initiatorType(p[i]);
  }
}
function print_initiatorType(perfEntry) {
  // Print this performance entry object's initiatorType value
  const value = "initiatorType" in perfEntry;
  if (value) {
    console.log(`… initiatorType = ${perfEntry.initiatorType}`);
  } else {
    console.log("… initiatorType = NOT supported");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
