---
title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
tags:
  - API
  - Constructor
  - DOM Events
  - ProgressEvent
browser-compat: api.ProgressEvent.ProgressEvent
---
{{APIRef("DOM Events")}}

The **`ProgressEvent()`** constructor returns a newly created
{{domxref("ProgressEvent")}}, representing the current completion of a long process.

## Syntax

```js
progressEvent = new ProgressEvent(type, {lengthComputable: aBooleanValue, loaded: aNumber, total: aNumber});
```

### Arguments

_The `ProgressEvent()` constructor also inherits arguments from
{{domxref("Event.Event", "Event()")}}._

- _type_
  - : Is a {{domxref("DOMString")}} representing the name of the type of the
    `ProgressEvent`. It is case-sensitive.
- `lengthComputable` {{optional_inline}}
  - : Is a boolean flag indicating if the total work to be done, and the
    amount of work already done, by the underlying process is calculable. In other words,
    it tells if the progress is measurable or not. It defaults to `false`.
- `loaded` {{optional_inline}}
  - : Is an `unsigned long long` representing the amount of work already
    performed by the underlying process. The ratio of work done can be calculated with the
    property and `ProgressEvent.total`. When downloading a resource using HTTP,
    this only represent the part of the content itself, not headers and other overhead. It
    defaults to `0`.
- `total` {{optional_inline}}
  - : Is an `unsigned long long` representing the total amount of work that the
    underlying process is in the progress of performing. When downloading a resource using
    HTTP, this only represent the content itself, not headers and other overhead. It
    defaults to `0`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
