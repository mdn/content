---
title: "RTCDtlsTransport: getRemoteCertificates() method"
short-title: getRemoteCertificates()
slug: Web/API/RTCDtlsTransport/getRemoteCertificates
page-type: web-api-instance-method
browser-compat: api.RTCDtlsTransport.getRemoteCertificates
---

{{APIRef("WebRTC")}}

The **`getRemoteCertificates()`** method of the {{domxref("RTCDtlsTransport")}} interface returns the certificates chain of the remote peer of the DTLS connection.

## Syntax

```js-nolint
getRemoteCertificates()
```

### Parameters

None.

### Return value

An array of {{jsxref("ArrayBuffer")}} objects that represents the remote peer's certificate chain.
Each object contains a DER-encoded X.509 certificate.

For [`new`](/en-US/docs/Web/API/RTCDtlsTransport/state#new) connections, this is an empty array.
It is populated with the certificates from the remote peer when the state of the transport changes to [`connected`](/en-US/docs/Web/API/RTCDtlsTransport/state#connected).

### Exceptions

None

## Description

WebRTC media and data channels are secured using DTLS (Datagram Transport Layer Security).
During signaling, each endpoint advertises the fingerprint of the DTLS certificate it will present.
During the DTLS handshake, the user agent verifies that the certificate presented by the remote peer matches the fingerprint in the negotiated SDP.

DTLS guarantees the connected peer is the one you've been negotiating with, because only that peer has the private key matching the certificate whose fingerprint was exchanged during signaling.
However, WebRTC uses self-signed certificates rather than certificates issued by a certificate authority, so the certificate does not identify the person, service, or device at the other end.
Establishing the identity of the remote peer usually requires an out-of-band mechanism such as comparing certificate fingerprints verbally over a phone call, or using a separate authenticated channel.

The `getRemoteCertificates()` method allows you to get the remote certificates used by DTLS and use them for _application-layer_ authentication of the remote peer.

For fingerprint continuity, each peer must use the same certificate across sessions, rather than generating a new one each time they connect."
After connecting to the remote peer, you'd exchange information out-of-band to verify that it is the intended party, and use `getRemoteCertificates()` to get its certificates.
When you subsequently connect to that remote peer, you'd only allow communication if it has exactly the same certificate fingerprints.
There is still a window for a person-in-the-middle attack, but it only exists for the very first connection between peers.

Note that `getRemoteCertificates()` returns raw DER-encoded X.509 certificates as `ArrayBuffer` objects.
DER (Distinguished Encoding Rules) is the binary serialization format used for X.509 certificates in TLS and DTLS.
Unlike {{domxref("RTCCertificate")}}, these buffers do not expose fingerprints and expiration date directly.
To work with them you must process the raw bytes: you can hash the buffer with {{domxref("SubtleCrypto.digest()")}} to compute a fingerprint (as shown in the example below), or pass it to an X.509 parsing library to inspect individual fields.

## Example

### Basic usage

This example shows how to fingerprint the remote peer's certificate after the DTLS handshake and compare it against a stored value.

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
    if (!fingerprint) return;
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

- {{domxref("RTCPeerConnection.generateCertificate()")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to the Real-time Transport Protocol (RTP)](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP)
