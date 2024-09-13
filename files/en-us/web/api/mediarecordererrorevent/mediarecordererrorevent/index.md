---
title: "MediaRecorderErrorEvent: MediaRecorderErrorEvent() constructor"
short-title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
page-type: web-api-constructor
status:
  - deprecated
  - non-standard
browser-compat: api.MediaRecorderErrorEvent.MediaRecorderErrorEvent
---

{{APIRef("MediaStream Recording")}}{{Deprecated_Header}}{{Non-standard_Header}}

The
**`MediaRecorderErrorEvent()`** constructor creates a new {{domxref("MediaRecorderErrorEvent")}} object
that represents an error that occurred during the recording of media
by the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API).

> [!NOTE]
> In general, you won't create these yourself; they are delivered to your
> implementation of {{domxref("MediaRecorder.error_event", "onerror")}} when errors occur while
> recording media.

## Syntax

```js-nolint
new MediaRecorderErrorEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `error`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `error`
      - : A {{domxref("DOMException")}} that describes the error that occurred. This
        object's {{domxref("DOMException.name", "name")}} property should indicate the
        name of the error that occurred. The other fields may or may not be present.

> [!NOTE]
> Some {{Glossary("user agent", "user agents")}} add to the `error` object
> other properties that provide information such as stack dumps, the name of the
> JavaScript file and the line number where the error occurred, and other debugging
> aids, but you should not rely on this information in a production environment.

### Return value

A new {{domxref("MediaRecorderErrorEvent")}} object.

## Specifications

This feature is no longer part of any specification, and longer on track to become standard.

## Browser compatibility

{{Compat}}
