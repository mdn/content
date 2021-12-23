---
title: RTCDataChannel.reliable
slug: Web/API/RTCDataChannel/reliable
tags:
  - Deprecated
  - Non-standard
  - Property
  - RTCDataChannel
  - Read-only
  - WebRTC
  - reliable
browser-compat: api.RTCDataChannel.reliable
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The read-only `RTCDataChannel` property
**`reliable`** indicates whether or not the data channel is
reliable.

> **Warning:** This property is obsolete. Use {{domxref("RTCDataChannel.ordered")}} instead in any
> new code, and update existing code as soon as possible.

## Syntax

```js
var reliable = aDataChannel.reliable;
```

### Value

`true` if the {{domxref("RTCDataChannel")}}'s connection is reliable;
`false` if it isn't.

## Example

```js
// TBD
```

## Specifications

No longer part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.ordered")}}
