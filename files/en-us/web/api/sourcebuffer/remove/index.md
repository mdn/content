---
title: SourceBuffer.remove()
slug: Web/API/SourceBuffer/remove
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - remove
browser-compat: api.SourceBuffer.remove
---
{{draft}}{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`remove()`** method of the {{domxref("SourceBuffer")}}
interface removes media segments within a specific time range from the
`SourceBuffer`. This method can only be called when
{{domxref("SourceBuffer.updating")}} equals `false`. If
`SourceBuffer.updating` is not equal to `false`, call
{{domxref("SourceBuffer.abort()")}}.

## Syntax

```js
sourceBuffer.remove(start, end);
```

### Parameters

- start
  - : A double representing the start of the time range, in seconds.
- end
  - : A double representing the end of the time range, in seconds.

### Return value

{{jsxref('undefined')}}.

### Exceptions

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
        The {{domxref("MediaSource.duration")}} property is equal
        to <code>NaN</code>, the <code>start</code> parameter is negative or
        greater than {{domxref("MediaSource.duration")}}, or the
        end parameter is less than or equal to start or equal to
        <code>NaN</code>.
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        The {{domxref("SourceBuffer.updating")}} property is equal
        to <code>true</code>, or this <code>SourceBuffer</code> has been removed
        from the {{domxref("MediaSource")}}.
      </td>
    </tr>
  </tbody>
</table>

## Example

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
