---
title: MediaStream.id
slug: Web/API/MediaStream/id
tags:
  - MediaStream
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.MediaStream.id
---
{{APIRef("WebRTC")}}

The **`MediaStream.id()`** read-only property is a
{{domxref("DOMString")}} containing 36 characters denoting a unique identifier (GUID)
for the object.

## Syntax

```js
var id = mediaStream.id;
```

## Example

```js
var p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

p.then(function(stream) {
   console.log(stream.id);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}, the interface this property belongs to.
