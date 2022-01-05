---
title: MediaRecorderErrorEvent()
slug: Web/API/MediaRecorderErrorEvent/MediaRecorderErrorEvent
tags:
  - API
  - Audio
  - Constructor
  - Media
  - Media Capture
  - Media Capture and Streams
  - MediaRecordingErrorEvent
  - MediaStream Recording
  - MediaStream Recording API
  - Recording
  - Video
browser-compat: api.MediaRecorderErrorEvent.MediaRecorderErrorEvent
---
{{APIRef("MediaStream Recording")}}

The
**`MediaRecorderErrorEvent()`**
constructor creates a new {{domxref("MediaRecorderErrorEvent")}} object that
represents an error that occurred during the recording of media by the [MediaStream Recording
API](/en-US/docs/Web/API/MediaStream_Recording_API).

> **Note:** In general, you won't create these yourself; they are delivered to your
> implementation of {{domxref("MediaRecorder.onerror")}} when errors occur while
> recording media.

## Syntax

```js
var errorEvent = new MediaRecorderErrorEvent(errorInfo)
```

### Parameters

- `errorInfo`

  - : An object describing the error object to be created. It _must_ contain the
    `error` property at a minimum.

    - `error`
      - : A {{domxref("DOMException")}} that describes the error that occurred. This
        object's {{domxref("DOMException.name", "name")}} property should indicate the
        name of the error that occurred. The other fields may or may not be present.

> **Note:** Some {{Glossary("user agent", "user agents")}} add to the `error` object
> other properties that provide information such as stack dumps, the name of the
> JavaScript file and the line number where the error occurred, and other debugging
> aids, but you should not rely on this information in a production environment.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
