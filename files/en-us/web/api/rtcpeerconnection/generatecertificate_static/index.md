---
title: "RTCPeerConnection: generateCertificate() static method"
short-title: generateCertificate()
slug: Web/API/RTCPeerConnection/generateCertificate_static
page-type: web-api-static-method
browser-compat: api.RTCPeerConnection.generateCertificate_static
---

{{APIRef("WebRTC")}}

The **`generateCertificate()`** static function of the {{domxref("RTCPeerConnection")}} interface creates an X.509 certificate and corresponding private key, returning a promise that resolves with the new {{domxref("RTCCertificate")}} once it's generated.

## Syntax

```js-nolint
RTCPeerConnection.generateCertificate(keygenAlgorithm)
```

### Parameters

- `keygenAlgorithm`
  - : A [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) {{domxref("AlgorithmIdentifier")}} string or an {{domxref("CryptoKey/algorithm","Algorithm")}} -subclassed object specifying an algorithm to use when creating the certificate's key.

> **Note:** `generateCertificate()` is a static method, so it is always called on the `RTCPeerConnection` interface itself, not an instance thereof.

### Return value

A promise which resolves to a new {{domxref("RTCCertificate")}} object containing a new key based on the specified options.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the normalized form of `keygenAlgorithm` specifies an algorithm or algorithm settings that the browser doesn't support, or which it does not allow for use with an {{domxref("RTCPeerConnection")}}.

Other errors may occur; for example, if the specified `keygenAlgorithm` can't be successfully converted into an {{domxref("RTCCertificateExpiration")}} dictionary, the error that occurs during that conversion will be thrown.

## Description

If a string is specified, it must be a [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)-compatible algorithm name string.
Alternatively, you can provide specific details for the algorithm's configuration by providing an object based on one of the Web Crypto API's {{domxref("CryptoKey/algorithm","Algorithm")}} class's subclasses.

### Standard configurations

All browsers are required to support the following two configurations.
It's entirely possible that a browser's _default_ settings may be different, but these are always supported.

#### RSASSA-PKCS1-v1_5

```js
let stdRSACertificate = {
  name: "RSASSA-PKCS1-v1_5",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
  hash: "SHA-256",
};
```

#### ECDSA

```js
let stdECDSACertificate = {
  name: "ECDSA",
  namedCurve: "P-256",
};
```

### Certificate expiration time

By default the new certificate is configured with `expires` set to a value of 2592000000 milliseconds, or 30 days.
The expiration time cannot exceed 31536000000 milliseconds, or 365 days.
It's also useful to note that browsers may further restrict the expiration time of certificates if they choose.

## Examples

### Specifying algorithm details

This example requests a new RSASSA-PKCS1-v1_5 certificate using a SHA-256 hash and a modulus length of 2048.

```js
RTCPeerConnection.generateCertificate({
  name: "RSASSA-PKCS1-v1_5",
  hash: "SHA-256",
  modulusLength: 2048,
  publicExponent: new Uint8Array([1, 0, 1]),
}).then((cert) => {
  const pc = new RTCPeerConnection({ certificates: [cert] });
});
```

### Specifying an algorithm by name

The example below specifies a string requesting an [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) certificate.

```js
RTCPeerConnection.generateCertificate("ECDSA");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API)
- [Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Web security](/en-US/docs/Web/Security)
- {{Glossary("Symmetric-key cryptography")}}
- {{DOMxRef("Crypto")}}
