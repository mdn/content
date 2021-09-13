---
title: SourceBuffer.appendWindowEnd
slug: Web/API/SourceBuffer/appendWindowEnd
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
  - appendWindowEnd
browser-compat: api.SourceBuffer.appendWindowEnd
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}{{draft}}

The **`appendWindowEnd`** property of the
{{domxref("SourceBuffer")}} interface controls the timestamp for the end of the [append window](https://w3c.github.io/media-source/#append-window), a
timestamp range that can be used to filter what media data is appended to the
`SourceBuffer`. Coded media frames with timestamps wthin this range will be
appended, whereas those outside the range will be filtered out.

The default value of `appendWindowEnd` is positive infinity.

## Syntax

```js
var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

sourceBuffer.appendWindowEnd = 120.0;
```

### Value

A double, indicating the end time of the append window, in seconds.

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
      <td><code>InvalidAccessError</code></td>
      <td>
        An attempt was made to set the value to less than or equal to
        {{domxref("SourceBuffer.appendWindowStart")}}, or
        <code>NaN</code>.
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        This {{domxref("SourceBuffer")}} object is being updated (i.e.
        its {{domxref("SourceBuffer.updating")}} property is
        currently <code>true</code>), or this <code>SourceBuffer</code> has been
        removed from the {{domxref("MediaSource")}}.
      </td>
    </tr>
  </tbody>
</table>

## Example

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
