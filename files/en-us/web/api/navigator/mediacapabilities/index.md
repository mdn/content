---
title: Navigator.mediaCapabilities
slug: Web/API/Navigator/mediaCapabilities
tags:
  - API
  - Experimental
  - Media
  - Media Capabilities API
  - MediaCapabilities
  - Navigator
browser-compat: api.Navigator.mediaCapabilities
---
{{SeeCompatTable}}

The **`Navigator.mediaCapabilities`** read-only property
returns a {{domxref("MediaCapabilities")}} object that can expose information about the
decoding and encoding capabilities for a given format and output capabilities as defined
by the [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API).

## Syntax

```js
mediaCapabilitiesObj = globalObj.navigator.mediaCapabilities
```

## Value

A {{domxref("MediaCapabilities")}} object.

## Examples

```js
navigator.mediaCapabilities.decodingInfo({
    type : 'file',
    audio : {
        contentType : "audio/mp3",
        channels : 2,
        bitrate : 132700,
        samplerate : 5200
    }
}).then(function(result) {
  console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capabilities API](/en-US/docs/Web/API/Media_Capabilities_API)
- {{domxref("Navigator")}}

{{APIRef("HTML DOM")}}
