---
title: MediaStream.id
slug: Web/API/MediaStream/id
page-type: web-api-instance-property
tags:
  - MediaStream
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.MediaStream.id
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStream.id`** read-only property is a
string containing 36 characters denoting a unique identifier (GUID)
for the object.

## Value

A string.

## Examples

```js
const promise = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

promise.then((stream) => {
   console.log(stream.id);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}, the interface this property belongs to.
