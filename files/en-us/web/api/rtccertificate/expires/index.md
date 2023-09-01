---
title: "RTCCertificate: expires property"
short-title: expires
slug: Web/API/RTCCertificate/expires
page-type: web-api-instance-property
browser-compat: api.RTCCertificate.expires
---

{{APIRef("WebRTC")}}

The read-only **`expires`** property of the {{domxref("RTCCertificate")}} interface returns the expiration date of the certificate.

By default a new certificate is configured with `expires` set to a value of 2592000000 milliseconds, or 30 days.
The expiration time cannot exceed 31536000000 milliseconds, or 365 days.
It's also useful to note that browsers may further restrict the expiration time of certificates if they choose.

## Value

A timestamp, given as [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds, containing the expiration date of the certificate.

## Examples

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then((cert) => {
  const pc = new RTCPeerConnection({ certificates: [cert] });
  console.log(cert.expires); // 2592000000 (30 days, the default)
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}
