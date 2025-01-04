---
title: "Response: arrayBuffer() method"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
page-type: web-api-instance-method
browser-compat: api.Response.arrayBuffer
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`arrayBuffer()`** method of the {{domxref("Response")}} interface
takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
that resolves with an {{jsxref("ArrayBuffer")}}.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("ArrayBuffer")}}.

### Exceptions

- {{domxref("DOMException")}} `AbortError`
  - : The request was [aborted](/en-US/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
- {{jsxref("RangeError")}}
  - : There was a problem creating the associated `ArrayBuffer`.
    For example, if the data size is more than [`Number.MAX_SAFE_INTEGER`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Examples

### Playing music

In our [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer), we have a Play button. When pressed, the `getData()`
function is run. Note that before playing full audio file will be downloaded. If you
need to play ogg during downloading (stream it) - consider
{{domxref("HTMLAudioElement")}}:

```js
new Audio("music.ogg").play();
```

In `getData()` we create a new request using the
{{domxref("Request.Request","Request()")}} constructor, then use it to fetch an OGG
music track. We also use {{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}} to create an
audio buffer source. When the fetch is successful, we read an {{jsxref("ArrayBuffer")}}
out of the response using `arrayBuffer()`, decode the audio data using
{{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, set the decoded data as the audio buffer
source's buffer (`source.buffer`), then connect the source up to the
{{domxref("BaseAudioContext/destination", "AudioContext.destination")}}.

Once `getData()` has finished running, we start the audio source playing
with `start(0)`, then disable the play button so it can't be clicked again
when it is already playing (this would cause an error.)

```js
function getData() {
  const audioCtx = new AudioContext();

  return fetch("viper.ogg")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.arrayBuffer();
    })
    .then((buffer) => audioCtx.decodeAudioData(buffer))
    .then((decodedData) => {
      const source = new AudioBufferSourceNode(audioCtx);
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
      return source;
    });
}

// wire up buttons to stop and play audio

play.onclick = () => {
  getData().then((source) => {
    source.start(0);
    play.setAttribute("disabled", "disabled");
  });
};
```

### Reading files

The {{domxref("Response.Response","Response()")}} constructor accepts
{{domxref("File")}}s and {{domxref("Blob")}}s, so it may be used to read a
{{domxref("File")}} into other formats.

```js
function readFile(file) {
  return new Response(file).arrayBuffer();
}
```

```html
<input type="file" onchange="readFile(this.files[0])" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
