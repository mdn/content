---
title: "WebTransport: exportKeyingMaterial() method"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WebTransport.exportKeyingMaterial
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

The **`exportKeyingMaterial()`** method of the {{domxref("WebTransport")}} interface returns a {{jsxref("Promise")}} that fulfills with keying material derived from the {{Glossary("TLS")}} session underlying the transport's connection.
This can be used to bind application-level authentication to the specific connection, for example to detect {{Glossary("MitM", "manipulator-in-the-middle")}} attacks when connecting to a peer that uses a self-signed certificate.

## Syntax

```js-nolint
exportKeyingMaterial(label, context, outputLength)
```

### Parameters

- `label`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} object identifying the purpose of the exported keying material.
    Must not be longer than 255 bytes.
- `context`
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, or a {{jsxref("DataView")}} object containing additional data to mix into the derived keying material.
    Using different `context` values with the same `label` lets an application derive several distinct secrets.
    Must not be longer than 255 bytes.
- `outputLength`
  - : An integer indicating the number of bytes of keying material to generate.
    Must be greater than `0`, and no greater than an implementation-defined maximum that is guaranteed to be at least `4096`.

    Choose the length based on how you'll use the material.
    For example, an AES-128 key requires 16 bytes, while an HMAC-SHA256 key is typically 32 bytes (the length of a SHA-256 digest).

### Return value

A {{jsxref("Promise")}} that fulfills with a {{jsxref("Uint8Array")}} containing `outputLength` bytes of keying material derived from the TLS session.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `label` or `context` is longer than 255 bytes, or if `outputLength` is `0` or greater than the implementation-defined maximum.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transport's state is `"closed"` or `"failed"` when the method is called.
    The returned promise also rejects with this exception if the transport's state becomes `"closed"` or `"failed"` before it settles.

## Description

### TLS keying material exporters

A **TLS keying material exporter** is a standard mechanism for deriving additional secrets from an established TLS session, without revealing the session's actual master secret.
Given a `label` that identifies the purpose of the derived value, `context` data, and a desired output length, the exporter produces a value that is unique to that specific TLS session.
The same `label` and `context` used on a different connection (even between the same two endpoints) produce different output.
The `label` and `context` parameters let a caller customize the derivation for a particular purpose.
Different combinations of `label`, `context`, and `outputLength` produce distinct, independently derived output, even though every output is based on the same underlying session secret.

`exportKeyingMaterial()` exposes this exporter for the TLS session underlying a `WebTransport` connection.
Because the exported value is cryptographically bound to that session, an application can use it to tie a credential, token, or handshake to that specific connection.
This technique is known as channel binding.

### Detecting MitM attacks with self-signed certificates

Channel binding allows an application-level handshake to detect MitM attacks when an application connects to a peer that has only a self-signed certificate.
The application trusts that certificate by passing its hash in the [`serverCertificateHashes`](/en-US/docs/Web/API/WebTransport/WebTransport#servercertificatehashes) option of the `WebTransport()` constructor.

Because no certificate authority vouches for a self-signed certificate, a successful TLS handshake proves only that the peer has a certificate matching one of the hashes in `serverCertificateHashes`, not who that peer actually is.
An attacker who substitutes a false hash during peer discovery can trick each side into connecting to the attacker instead of to the other peer.
The attacker then relays messages between them.

To detect this attack, an application can run a secondary handshake over one of the connection's ordinary (TLS-protected) streams.
The handshake authenticates the peer's identity, with the exported keying material as a channel-binding value.
If both ends are directly connected by a single TLS connection, they will have a unique shared master secret generated as part of key exchange, and hence export the same keying material.

Each peer proves its identity by signing the exported keying material with its identity private key, and sending that signature along with the matching public key.
An attacker can't spoof the signature, because it doesn't have either peer's private key.
The attacker can forward a peer's original public key and signature, but that signature won't verify against the keying material the receiving peer computes for its own connection, so the handshake aborts.

## Examples

### Binding a token to the connection

This example shows how we can use `exportKeyingMaterial()` to bind an existing application-level token to the connection by signing it.

It uses the `label` to scope the derived keying material to the application and purpose, then uses that material as an {{domxref("SubtleCrypto/sign#hmac", "HMAC")}} key to sign the `token`.
A server that has access to the same TLS session's exporter (for example, one that terminates {{Glossary("QUIC")}} and {{Glossary("HTTP_3", "HTTP/3")}} itself) can perform the equivalent derivation and verify the signature.
This confirms that `token` was signed for this exact connection.

Verifying the signature proves only that whoever presents `{ token, signature }` holds valid keying material for _some_ connection to the server, not who they are.
It stops a captured `{ token, signature }` pair from being reused later on an unrelated connection, but it doesn't stop the relay attack covered in [Detecting MitM attacks with self-signed certificates](#detecting_mitm_attacks_with_self-signed_certificates).
A MitM that's a genuine endpoint of its own connection to the server can compute a valid signature over the same `token`.
Defending against that requires signing with a persistent identity key instead of a plain HMAC keyed only by the connection's exported keying material.

```js
const encoder = new TextEncoder();

async function signTokenForConnection(transport, token) {
  try {
    const keyingMaterial = await transport.exportKeyingMaterial(
      encoder.encode("example.com/channel-binding"), // Label
      new Uint8Array(0), // Context (no additional context needed)
      32, // Output length
    );

    const key = await crypto.subtle.importKey(
      "raw",
      keyingMaterial,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    const signature = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(token),
    );

    // Send `token` and `signature` to the server together
    return { token, signature };
  } catch (error) {
    console.error(`Unable to bind token to connection: ${error}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor
- {{domxref("SubtleCrypto.importKey()")}}
- {{domxref("SubtleCrypto.sign()")}}
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
