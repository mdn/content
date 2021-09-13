---
title: SourceBuffer.trackDefaults
slug: Web/API/SourceBuffer/trackDefaults
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - SourceBuffer
  - Video
  - trackDefaults
browser-compat: api.SourceBuffer.trackDefaults
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`trackDefaults`** property of the
{{domxref("SourceBuffer")}} interface specifies the default values to use if kind,
label, and/or language information is not available in the [initialization segment](https://w3c.github.io/media-source/#init-segment) of
the media to be appended to the `SourceBuffer`.

## Syntax

```js
var myTrackDefaults = sourceBuffer.trackDefaults;

sourceBuffer.trackDefaults = myTrackDefaultList;
```

### Value

A {{domxref("TrackDefaultList")}} object.

### Exceptions

The following exceptions may be thrown when setting a new value for this property.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        One or more of the {{domxref("SourceBuffer")}} objects in
        {{domxref("MediaSource.sourceBuffers")}} are being updated
        (i.e. their {{domxref("SourceBuffer.updating")}} property is
        currently <code>true</code>), or this <code>SourceBuffer</code> has been
        removed from the {{domxref("MediaSource")}}.
      </td>
    </tr>
  </tbody>
</table>

## Example

TBD

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
