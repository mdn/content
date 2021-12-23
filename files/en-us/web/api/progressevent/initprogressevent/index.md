---
title: ProgressEvent.initProgressEvent()
slug: Web/API/ProgressEvent/initProgressEvent
tags:
  - API
  - Deprecated
  - Method
  - Progress Events
  - ProgressEvent
browser-compat: api.ProgressEvent.initProgressEvent
---
{{apiref("DOM Events")}} {{deprecated_header}}{{non-standard_header}}

The **`ProgressEvent.initProgressEvent()`** method Initializes
an animation event created using the deprecated {{domxref("Document.createEvent()",
  "Document.createEvent(\"ProgressEvent\")")}} method.

`ProgressEvent` created that way are untrusted.

> **Note:** this method has been dropped during the standard process. It
> has been deprecated and removed from most implementation. Do not use it anymore, use
> the standard constructor, {{domxref("ProgressEvent.ProgressEvent",
    "ProgressEvent()")}}, to create a synthetic {{domxref("ProgressEvent")}}

## Syntax

```js
Progress.initProgressEvent(typeArg, canBubbleArg, cancelableArg, lengthComputable, loaded, total);
```

### Parameters

- _typeArg_

  - : Is a {{domxref("DOMString")}} identifying the specific type of animation event that
    occurred. The following values are allowed:

    | Value       | Meaning                                          |
    | ----------- | ------------------------------------------------ |
    | `loadstart` | The operation has started.                       |
    | `progress`  | The operation still is in progress.              |
    | `error`     | The operation failed and didn't complete.        |
    | `abort`     | The operation was cancelled and didn't complete. |
    | `load`      | The operation completed.                         |
    | `loadend`   | The operation stopped.                           |

- _canBubbleArg_
  - : Is a boolean flag indicating if the event can bubble
    (`true`) or not (`false)`.
- _cancelableArg_
  - : Is a boolean flag indicating if the event associated action can be
    avoided (`true`) or not (`false)`.
- _lengthComputable_
  - : Is a boolean flag indicating if the total work to be done, and the
    amount of work already done, by the underlying process is calculable. In other words,
    it tells if the progress is measurable or not.
- _loaded_
  - : Is an `unsigned long long` representing the amount of work already
    performed by the underlying process. The ratio of work done can be calculated with the
    property and `ProgressEvent.total`. When downloading a resource using HTTP,
    this only represent the part of the content itself, not headers and other overhead.
- _total_
  - : Is an `unsigned long long` representing the total amount of work that the
    underlying process is in the progress of performing. When downloading a resource using
    HTTP, this only represent the content itself, not headers and other overhead.

## Specifications

This feature does not exist in any specifications.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
