---
title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM Events
  - ProgressEvent
browser-compat: api.ProgressEvent.ProgressEvent
---
{{APIRef("XMLHttpRequest")}}

The **`ProgressEvent()`** constructor returns a new {{domxref("ProgressEvent")}} object, representing the current completion of a long process.

## Syntax

```js
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `loadstart`, `progress`, `abort`, `error`, `load`, `timeout`, or `loadend`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `lengthComputable` {{optional_inline}}
      - : A boolean value indicating if the total work to be done, and the
        amount of work already done, by the underlying process is calculable. In other words,
        it tells if the progress is measurable or not. It defaults to `false`.
    - `loaded` {{optional_inline}}
      - : A number representing the amount of work already
        performed by the underlying process. The ratio of work done can be calculated with the
        property and `ProgressEvent.total`. When downloading a resource using HTTP,
        this only represent the part of the content itself, not headers and other overhead. It
        defaults to `0`.
    - `total` {{optional_inline}}
      - : A number representing the total amount of work that the
        underlying process is in the progress of performing. When downloading a resource using
        HTTP, this only represent the content itself, not headers and other overhead. It
        defaults to `0`.

### Return value

A new {{domxref("ProgressEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
