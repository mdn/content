---
title: AudioData.allocationSize()
slug: Web/API/AudioData/allocationSize
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - allocationSize
  - AudioData
  - Experimental
browser-compat: api.AudioData.allocationSize
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`allocationSize()`** method of the {{domxref("AudioData")}} interface returns the size in bytes required to hold the current sample as filtered by options passed into the method.

## Syntax

```js
allocationSize(options)
```

### Parameters

- `options`
  - : An object containing the following:
    - `planeIndex`
      - : The index of the plane to return the size of.
    - `frameOffset` {{optional_inline}}
      - : An integer giving an offset into the plane data indicating which plane to begin from. Defaults to `0`.
    - `frameCount` {{optional_inline}}
      - : An integer giving the number of frames to return the size of. If omitted then all frames in the plane will be used, beginning with the frame specified in `frameOffset`.

### Return value

An integer containing the number of bytes needed to hold the samples described by `options`.

## Examples

The following example gets the size of the plane at index `1`.

```js
let size = AudioData.allocationSize({planeIndex: 1})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
