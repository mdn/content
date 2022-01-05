---
title: 'RTCPeerConnection: icecandidateerror event'
slug: Web/API/RTCPeerConnection/icecandidateerror_event
tags:
  - API
  - Connection
  - Connectivity
  - Event
  - Failure
  - ICE
  - Networking
  - RTCPeerConnection
  - Reference
  - STUN
  - TURN
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - icecandidateerror
browser-compat: api.RTCPeerConnection.icecandidateerror_event
---
{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API) event **`icecandidateerror`** is sent to an {{domxref("RTCPeerConnection")}} if an error occurs while performing ICE negotiations through a {{Glossary("STUN")}} or {{Glossary("TURN")}} server. The event object is of type {{domxref("RTCPeerConnectionIceErrorEvent")}}, and contains information describing the error in some amount of detail.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("RTCPeerConnectionIceErrorEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("RTCPeerConnection.onicecandidateerror")}}
      </td>
    </tr>
  </tbody>
</table>

## Description

The error object's {{domxref("RTCPeerConnectionIceErrorEvent.errorCode", "errorCode")}} property is one of the numeric STUN error codes. There is one additional, WebRTC-specific, error which lies outside the valid STUN error code range: 701. Error 701 indicates that none of the ICE candidates were able to successfully make contact with the STUN or TURN server.

The 701 error is fired only once per server URL from the list of available STUN or TURN servers provided when creating the {{domxref("RTCPeerConnection")}}. These errors occur only when the connection's [ICE gathering state](/en-US/docs/Web/API/RTCPeerConnection/iceGatheringState) is `gathering`.

## Example

The following example establishes a handler for `icecandidateerror`s that occur on the {{domxref("RTCPeerConnection")}} `pc`. This handler looks specifically for 701 errors that indicate that candidates couldn't reach the STUN or TURN server.

When this happens, the server URL and the error message are passed to a function called `reportConnectFail()` to log or output the connection failure.

```js
pc.addEventListener("icecandidateerror", (event) => {
  if (event.errorCode === 701) {
    reportConnectFail(event.url, event.errorText);
  }
});
```

Note that if multiple STUN and/or TURN servers are provided when creating the connection, this error may happen more than once, if more than one of those servers fails. Each provided server is tried until a connection is established.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
