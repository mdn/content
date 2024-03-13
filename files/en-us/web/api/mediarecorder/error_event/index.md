---
title: "MediaRecorder: error event"
short-title: error
slug: Web/API/MediaRecorder/error_event
page-type: web-api-event
browser-compat: api.MediaRecorder.error_event
---

{{APIRef("MediaStream Recording")}}

The **`error`** event of the {{domxref("MediaRecorder")}} interface is fired when an error occurs: for example because recording wasn't allowed or was attempted using an unsupported codec.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("event", (event) => {});

onevent = (event) => {};
```

## Event type

A {{domxref("MediaRecorderErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaRecorderErrorEvent")}}

## Event properties

_Inherits properties from its parent interface, {{domxref("Event")}}_.

- {{domxref("MediaRecorderErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMException")}} containing information about the error that occurred.

## Description

### Trigger

A function to be called whenever an error occurs during the recorder's lifetime. In
addition to other general errors that might occur, the following errors are specifically
possible when using the MediaStream Recording API; to determine which occurred, check
the value of {{domxref("DOMException.name", "MediaRecorderErrorEvent.error.name")}}.

- `SecurityError`
  - : The {{domxref("MediaStream")}} is configured to disallow recording. This may be the
    case, for example, with sources obtained using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} when the user denies permission to use an input device.
- `InvalidModificationError`
  - : The number of tracks on the stream being recorded has changed. You can't add or
    remove tracks while recording media.
- `UnknownError`
  - : An non-security related error occurred that cannot otherwise be categorized.
    Recording stops, the `MediaRecorder`'s {{domxref("MediaRecorder.state", "state")}} becomes `inactive`, one last {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event is sent to the `MediaRecorder` with the remaining received data, and finally a {{domxref("MediaRecorder/stop_event", "stop")}} event is sent.

## Examples

Using {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for `error` events:

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.addEventListener("error", (event) => {
    console.error(`error recording stream: ${event.error.name}`);
  });
  recorder.start();
}

record();
```

The same, but using the `onerror` event handler property:

```js
async function record() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  recorder.onerror = (event) => {
    console.error(`error recording stream: ${event.error.name}`);
  };
  recorder.start();
}

record();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
