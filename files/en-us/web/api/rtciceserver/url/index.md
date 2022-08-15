---
title: RTCIceServer.url
slug: Web/API/RTCIceServer/url
page-type: web-api-instance-property
tags:
  - Deprecated
  - Property
  - RTCIceServer
  - Reference
  - URL
  - WebRTC
browser-compat: api.RTCIceServer.url
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **obsolete** {{domxref("RTCIceServer")}} dictionary's
**`url`** property specifies the URL of a single ICE server to
be used while negotiating connections. It was removed from the specification in June
2013 but is still broadly used in older examples and books, so we include documentation
here to help adapt old code to new browsers.

This property has been removed from the specification; while it's still supported by
many browsers, it should no longer be used. You should instead use the newer
{{domxref("RTCIceServer.urls", "urls")}} property, which allows you to optionally
specify multiple URLs for the server. Try to update any existing code to use that
property instead.

## Syntax

```js
const iceServer = {
  // ...
  url: iceServerUrl,
  // ...
};

const serverUrl = iceServer.url;

iceServer.url = iceServerUrl;
```

The value of this property is a string containing the full URL of a
server to use during ICE negotiation.

## Example

This example creates a new {{domxref("RTCPeerConnection")}} which will use a
{{Glossary("STUN")}} server at `stunserver.example.org` to negotiate
connections.

```js
myPeerConnection = new RTCPeerConnection({
  iceServers: [
    {
      url: "stun:stunserver.example.org"
    }
  ]
});
```

Unfortunately, the only way to tell ICE that the server has a backup domain name of
`stunserver2.example.org` is to add a new entry to the
`iceServers` array for it. The {{domxref("RTCIceServer.urls", "urls")}}
property lets you include them both in one server, which is more readily maintainable.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCIceServer")}}
