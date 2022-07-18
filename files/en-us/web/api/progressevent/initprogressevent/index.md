---
title: ProgressEvent.initProgressEvent()
slug: Web/API/ProgressEvent/initProgressEvent
page-type: web-api-instance-method
tags:
  - API
  - Deprecated
  - Method
  - Progress Events
  - ProgressEvent
browser-compat: api.ProgressEvent.initProgressEvent
---
{{APIRef("XMLHttpRequest")}} {{deprecated_header}}{{non-standard_header}}

The **`ProgressEvent.initProgressEvent()`** method Initializes
an animation event created using the deprecated {{domxref("Document.createEvent()",
  "Document.createEvent('ProgressEvent')")}} method.

`ProgressEvent` created that way are untrusted.

> **Note:** this method has been dropped during the standard process. It
> has been deprecated and removed from most implementation. Do not use it anymore, use
> the standard constructor, {{domxref("ProgressEvent.ProgressEvent",
    "ProgressEvent()")}}, to create a synthetic {{domxref("ProgressEvent")}}

## Syntax

```js
initProgressEvent(type, canBubble, cancelable, lengthComputable, loaded, total)
```

### Parameters

- `type`

  - : A string identifying the specific type of animation event that
    occurred. Possible values are: `loadstart`, `progress`, `error`, `abort`, `load`, or `loadend`.
- `canBubble`
  - : A boolean flag indicating if the event can bubble
    (`true`) or not (`false`).
- `cancelable`
  - : A boolean flag indicating if the event associated action can be
    avoided (`true`) or not (`false`).
- `lengthComputable`
  - : A boolean flag indicating if the total work to be done, and the
    amount of work already done, by the underlying process is calculable. In other words,
    it tells if the progress is measurable or not.
- `loaded`
  - : An `unsigned long long` representing the amount of work already
    performed by the underlying process. The ratio of work done can be calculated with the
    property and `ProgressEvent.total`. When downloading a resource using HTTP,
    this only represent the part of the content itself, not headers and other overhead.
- `total`
  - : An `unsigned long long` representing the total amount of work that the
    underlying process is in the progress of performing. When downloading a resource using
    HTTP, this only represent the content itself, not headers and other overhead.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

This feature does not exist in any specifications.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
