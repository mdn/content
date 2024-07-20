---
title: "Navigator: mediaCapabilities property"
short-title: mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
page-type: web-api-instance-property
browser-compat: api.Navigator.mediaCapabilities
---

{{APIRef("HTML DOM")}}

The **`mediaCapabilities`** read-only property of the {{domxref("Navigator")}} interface references a {{domxref("MediaCapabilities")}} object that can expose information about the decoding and encoding capabilities for a given media format and output capabilities.

## Value

A {{domxref("MediaCapabilities")}} object.

## Examples

```js
navigator.mediaCapabilities
  .decodingInfo({
    type: "file",
    audio: {
      contentType: "audio/mp3",
      channels: 2,
      bitrate: 132700,
      samplerate: 5200,
    },
  })
  .then((result) => {
    console.log(
      `This configuration is ${result.supported ? "" : "not "}supported,`,
    );
    console.log(`${result.smooth ? "" : "not "}smooth, and`);
    console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}
