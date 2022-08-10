---
title: MediaRecorder.isTypeSupported()
slug: Web/API/MediaRecorder/isTypeSupported
page-type: web-api-static-method
tags:
  - API
  - Audio
  - Media
  - Media Capture
  - Media Recorder API
  - MediaRecorder
  - Method
  - Reference
  - Video
  - canRecordMimeType
browser-compat: api.MediaRecorder.isTypeSupported
---
{{APIRef("MediaStream Recording")}}

The
**`MediaRecorder.isTypeSupported()`** static method returns a
Boolean which is `true` if the MIME type specified is one the user agent
should be able to successfully record.

## Syntax

```js
isTypeSupported(mimeType)
```

### Parameters

- `mimeType`
  - : The MIME media type to check.

### Return value

`true` if the {{domxref("MediaRecorder")}} implementation is capable of
recording {{domxref("Blob")}} objects for the specified MIME type. Recording may still
fail if there are insufficient resources to support the recording and encoding process.
If the value is `false`, the user agent is incapable of recording the
specified format.

## Examples

```js
const types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mpeg",
];

for (const type of types) {
  console.log(`Is ${type} supported? ${MediaRecorder.isTypeSupported(type) ? "Maybe!" : "Nope :("}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API)
- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)
- [The "codecs" parameter in common media types](/en-US/docs/Web/Media/Formats/codecs_parameter)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaCapabilities")}}
