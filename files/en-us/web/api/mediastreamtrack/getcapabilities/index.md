---
title: MediaStreamTrack.getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
page-type: web-api-instance-method
tags:
  - API
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamTrack
  - Method
  - Reference
  - getCapabilities
browser-compat: api.MediaStreamTrack.getCapabilities
---
{{APIRef("Media Capture and Streams")}}

The **`getCapabilities()`** method of
the {{domxref("MediaStreamTrack")}} interface returns a
{{domxref('MediaTrackCapabilities')}} object which specifies the values or range of
values which each constrainable property, based upon the platform and {{Glossary("user
    agent")}}.

Once you know what the browser's capabilities are, your script can use
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} to ask for the
track to be configured to match ideal or acceptable settings. See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js
getCapabilities()
```

### Parameters

None.

### Return value

A {{domxref('MediaTrackCapabilities')}} object which specifies the value or range of values which are supported for each of the user agent's supported constrainable properties.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
