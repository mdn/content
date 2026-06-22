---
title: "RTCDtlsTransport: getRemoteCertificates() method"
short-title: getRemoteCertificates()
slug: Web/API/RTCDtlsTransport/getRemoteCertificates
page-type: web-api-instance-method
browser-compat: api.RTCDtlsTransport.getRemoteCertificates
---

{{APIRef("WebRTC")}}

The **`getRemoteCertificates()`** method of the {{domxref("RTCDtlsTransport")}} interface is used to get the certificates from the remote peer of the connection.

## Syntax

```js-nolint
getRemoteCertificates()
```

### Parameters

None.

### Return value

An array of {{jsxref("ArrayBuffer")}} objects containing the public certificates of the remote peer of the connection.

For [`new`](/en-US/docs/Web/API/RTCDtlsTransport/state#new) connections this is an empty array.
It is populated with the certificates from the remote peer when the state of the transport changes to [`connected`](/en-US/docs/Web/API/RTCDtlsTransport/state#connected).

### Exceptions

None

## Description

WebRTC media and data channels are secured using DTLS (Datagram Transport Layer Security).
The protocol automatically uses certificates to ensure that the communicating remote peer is the same entity that negotiated the connection via the signaling server.
This is done by checking that the certificate presented during the DTLS handshake matches the `a=fingerprint` provided in the SDP.

DTLS guarantees the connected peer is the one you've been negotiating with, because only that peer has the private key matching the certificate whose fingerprint was exchanged during signaling.
However, it doesn't tell you who this remote peer is: DTLS can't help you if you initially connected to a compromised signaling server, or some unexpected peer.
Establishing the identity of the remote peer usually requires an out-of-band mechanism such as comparing certificate fingerprints verbally over a phone call, or using a separate authenticated channel.

The `getRemoteCertificates()` method allows you to get the remote certificates used by DTLS and use them for _application-layer_ authentication of the remote peer.

The way this works is that each peer must persist their own DTLS certificate across sessions, rather than generating a new one each time.
After connecting to the remote peer, you'd exchange information out-of-band to verify that it is the intended party, and use `getRemoteCertificates()` to get its certificates.
When you subsequently connect to that remote peer, you'd only allow communication if it has exactly the same certificate fingerprints.
There is still a window for a person-in-the-middle attack, but it only exists for the very first connection between peers.

Note that `getRemoteCertificates()` returns `ArrayBuffer` objects, which unlike {{domxref("RTCCertificate")}} do not provide direct access to fingerprint information.
Applications that need to compare fingerprints must parse the raw DER-encoded certificate data themselves, for example by hashing it with SHA-256.

## Example

### Basic usage

This function shows how you might get and fingerprint the remote peer's certificate after the DTLS handshake, and compare it to a stored value.

```js
async function getRemoteFingerprint(dtlsTransport) {
  const certs = dtlsTransport.getRemoteCertificates();
  if (certs.length === 0) {
    return null;
  }

  // Hash the raw DER-encoded certificate with SHA-256
  const digest = await crypto.subtle.digest("SHA-256", certs[0]);

  // Format as colon-separated hex, matching the SDP a=fingerprint convention
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(":");
}

// Call once DTLS handshake is complete
pc.addEventListener("connectionstatechange", async () => {
  if (pc.connectionState === "connected") {
    const sender = pc.getSenders()[0];
    if (!sender?.transport) return;

    const fingerprint = await getRemoteFingerprint(sender.transport);
    const stored = localStorage.getItem("remote-peer-fingerprint");

    if (!stored) {
      localStorage.setItem("remote-peer-fingerprint", fingerprint);
    } else if (stored !== fingerprint) {
      console.error("Certificate mismatch — closing connection");
      pc.close();
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
