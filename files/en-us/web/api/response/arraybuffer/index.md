---
title: Response.arrayBuffer()
slug: Web/API/Response/arrayBuffer
tags:
  - API
  - ArrayBuffer
  - Fetch
  - Method
  - Reference
  - Response
browser-compat: api.Response.arrayBuffer
---
{{APIRef("Fetch")}}

The **`arrayBuffer()`** method of the {{domxref("Response")}} interface
takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
that resolves with an {{jsxref("ArrayBuffer")}}.

## Syntax

```js
response.arrayBuffer().then(function(buffer) {
  // do something with buffer
});
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("ArrayBuffer")}}.

## Examples

### Playing music

In our [fetch array
buffer live](https://mdn.github.io/fetch-examples/fetch-array-buffer/), we have a Play button. When pressed, the `getData()`
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
  source = audioCtx.createBufferSource();

  var myRequest = new Request('viper.ogg');

  fetch(myRequest).then(function(response) {
    return response.arrayBuffer();
  }).then(function(buffer) {
    audioCtx.decodeAudioData(buffer, function(decodedData) {
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
    });
  });
};

// wire up buttons to stop and play audio

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}
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
<input type="file" onchange="readFile(this.files[0])">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
