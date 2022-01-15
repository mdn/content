---
title: RTCPeerConnectionIceEvent()
slug: Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent
tags:
  - API
  - Constructor
  - Experimental
  - RTCPeerConnectionIceEvent
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`RTCPeerConnectionIceEvent()`** constructor creates a new
{{domxref("RTCPeerConnectionIceEvent")}}.

## Syntax

```js
var event = new RTCPeerConnectionIceEvent(type, options);
```

### Parameters

- `type`
  - : Is a {{domxref("DOMString")}} containing the name of the event, like
    `"icecandidate"`.
- `options`

  - : A dictionary of type `RTCPeerConnectionInit`, which may contain one or
    more of the following fields:

    - `"candidate"` (optional, default is `null`): A
      {{domxref("RTCIceCandidate")}} representing the ICE candidate being concerned by
      the event.  If `null`, the event indicates the end of candidate
      gathering.
    - `"url"` (optional, default is `null`): The URL of the STUN
      or TURN server which was used to gather the candidate. If the candidate was not
      gathered by a {{Glossary("STUN")}} or {{Glossary("TURN")}} server, this value must
      be `null`.
    - `"bubbles"` (optional, default is `false`): Inherited from
      `EventInit()`, this Boolean option indicates whether or not the event
      must bubble.
    - `"cancelable"` (optional, default is `false`, inherited
      from `EventInit()`, this Boolean indicates whether or not the event can
      be canceled.

### Return value

A newly-created {{domxref("RTCPeerConnectionIceEvent")}}, configured as specified in
the provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- Its usual target: {{domxref("RTCPeerConnection")}}.
