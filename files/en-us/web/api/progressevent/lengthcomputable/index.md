---
title: ProgressEvent.lengthComputable
slug: Web/API/ProgressEvent/lengthComputable
tags:
  - API
  - Progress Events
  - ProgressEvent
  - Property
browser-compat: api.ProgressEvent.lengthComputable
---
{{APIRef("DOM Events")}}

The
**`ProgressEvent.lengthComputable`** read-only property is a
boolean flag indicating if the resource concerned by the
{{domxref("ProgressEvent")}} has a length that can be calculated. If not, the
{{domxref("ProgressEvent.total")}} property has no significant value.

## Syntax

```js
flag = ProgressEvent.lengthComputable
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
