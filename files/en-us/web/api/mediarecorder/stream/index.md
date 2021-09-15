---
title: MediaRecorder.stream
slug: Web/API/MediaRecorder/stream
tags:
  - API
  - Media Recorder API
  - MediaRecorder
  - Property
  - Reference
  - stream
browser-compat: api.MediaRecorder.stream
---
{{APIRef("MediaStream Recording")}}

The **`MediaRecorder.stream`** read-only property returns the
stream that was passed into the `MediaRecorder()` constructor when the
`MediaRecorder` was created.

## Syntax

```js
var stream = MediaRecorder.stream
```

### Values

The MediaStream passed into the `MediaRecorder()` constructor when the
`MediaRecorder` was originally created.

## Example

```js
if (navigator.getUserMedia) {
   console.log('getUserMedia supported.');
   navigator.getUserMedia (
      // constraints - only audio needed for this app
      {
         audio: true
      },

      // Success callback
      function(stream) {
           var mediaRecorder = new MediaRecorder(stream);

           var myStream = mediaRecorder.stream;
           console.log(myStream);

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder +
  getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording
  demo](http://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.getUserMedia")}}
