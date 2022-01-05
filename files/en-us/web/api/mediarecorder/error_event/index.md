---
title: 'MediaRecorder: error event'
slug: Web/API/MediaRecorder/error_event
tags:
  - Event
browser-compat: api.MediaRecorder.error_event
---
{{APIRef}}

The {{domxref("MediaRecorder")}} interface's **`error`** event is fired when an error occurs: for example because recording wasn't allowed or was attempted using an unsupported codec.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MediaRecorderErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/MediaRecorder/onerror">onerror</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

For details of the all the possible errors see the documentation for the event handler property: [`onerror`](/en-US/docs/Web/API/MediaRecorder/onerror).

## Examples

Using [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) to listen for `error` events:

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.addEventListener('error', (event) => {
        console.error(`error recording stream: ${event.error.name}`)
    });
    recorder.start();
}

record();
```

The same, but using the onerror event handler property:

```js
async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    const recorder = new MediaRecorder(stream);
    recorder.onerror = (event) => {
        console.error(`error recording stream: ${event.error.name}`)
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

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
