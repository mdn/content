---
title: ProgressEvent.loaded
slug: Web/API/ProgressEvent/loaded
tags:
  - API
  - Progress Event
  - ProgressEvent
  - Property
browser-compat: api.ProgressEvent.loaded
---
{{APIRef("DOM Events")}}

The **`ProgressEvent.loaded`** read-only property is an integer
representing the amount of work already performed by the underlying process. The ratio
of work done can be calculated with the property and `ProgressEvent.total`.
When downloading a resource using HTTP, this value is specified in bytes (not bits), and only represents the part of the content
itself, not headers and other overhead.  

## Syntax

```js
value = ProgressEvent.loaded
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
