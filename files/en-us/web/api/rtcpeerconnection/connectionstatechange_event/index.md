---
title: 'RTCPeerConnection: connectionstatechange event'
slug: Web/API/RTCPeerConnection/connectionstatechange_event
tags:
  - Event
  - RTCPeerConnection
  - Reference
  - WebRTC
  - connectionstatechange
browser-compat: api.RTCPeerConnection.connectionstatechange_event
---
{{APIRef("WebRTC")}}

The **`connectionstatechange`** event is sent to the {{domxref("RTCPeerConnection.onconnectionstatechange", "onconnectionstatechange")}} event handler on an {{domxref("RTCPeerConnection")}} object after a new track has been added to an {{domxref("RTCRtpReceiver")}} which is part of the connection.
The new connection state can be found in {{domxref("RTCPeerConnection.connectionState", "connectionState")}},
and is one of the string values:
`new`, `connecting`, `connected`, `disconnected`,
`failed`, or `closed`.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("RTCPeerConnection.onconnectionstatechange", "onconnectionstatechange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

For an {{domxref("RTCPeerConnection")}}, `pc`, this example sets up a handler for `connectionstatechange` messages to handle changes to the connectivity of the WebRTC session. It calls an app-defined function called `setOnlineStatus()` to update a status display.

```js
pc.onconnectionstatechange = ev => {
  switch(pc.connectionState) {
    case "new":
    case "checking":
      setOnlineStatus("Connecting...");
      break;
    case "connected":
      setOnlineStatus("Online");
      break;
    case "disconnected":
      setOnlineStatus("Disconnecting...");
      break;
    case "closed":
      setOnlineStatus("Offline");
      break;
    case "failed":
      setOnlineStatus("Error");
      break;
    default:
      setOnlineStatus("Unknown");
      break;
  }
}
```

You can also create a handler for `connectionstatechange` by using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
pc.addEventListener("connectionstatechange", ev => {
  switch(pc.connectionState) {
    /* ... */
  }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection.connectionState")}}
