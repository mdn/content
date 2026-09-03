---
title: "WebTransport: exportKeyingMaterial() method"
short-title: exportKeyingMaterial()
slug: Web/API/WebTransport/exportKeyingMaterial
page-type: web-api-instance-method
browser-compat: api.WebTransport.exportKeyingMaterial
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

The **`exportKeyingMaterial()`** method of the {{domxref("WebTransport")}} interface returns a {{jsxref("Promise")}} that fulfills with keying material derived from the {{Glossary("TLS")}} session underlying the transport's connection.

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
    This allows an application to generate a number of different secrets, all grouped under the same label.
    Must not be longer than 255 bytes.
- `outputLength`
  - : An integer indicating the number of bytes of keying material to generate.
    Must be greater than `0`, and no greater than an implementation-defined maximum that is guaranteed to be at least `4096`.

    The length is chosen based on how the material is to be used.
    For example, generating an AES-128 key requires 16 bytes, while an HMAC-SHA256 key requires 32 bytes.

### Return value

A {{jsxref("Promise")}} that fulfills with a {{jsxref("Uint8Array")}} containing `outputLength` bytes of keying material derived from the TLS session.

### Exceptions

- `RangeError`
  - : Thrown if `label` or `context` is longer than 255 bytes, or if `outputLength` is `0` or greater than the implementation-defined maximum.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transport's state is `"closed"` or `"failed"` when the method is called, or if the connection transitions to one of these states before the returned promise settles.

## Description

A **TLS keying material exporter** is a standard mechanism for deriving additional secrets from an established TLS session, without revealing the session's actual master secret.
Given a `label` that identifies the purpose of the derived value, optional `context` data, and a desired output length, the exporter produces a value that is unique to that specific TLS session.
The same label and context used on a different connection (even between the same two endpoints) produce different output.

`exportKeyingMaterial()` exposes this exporter for the TLS session underlying a `WebTransport` connection.
Because the exported value is cryptographically bound to that one session, it can be used to tie some other credential, token, or handshake to this specific connection — a technique known as channel binding.

This allows an application-level handshake to detect MITM attacks in the case where an application connects to a peer that only has a self-signed certificate (using the [`serverCertificateHashes`](/en-US/docs/Web/API/WebTransport/WebTransport#servercertificatehashes) option of the `WebTransport()` constructor).

Because no certificate authority vouches for a self-signed certificate, a successful TLS handshake only proves the peer holds one of the pinned hashes — not who that peer actually is.
An attacker who substitutes a false hash during peer discovery can trick each side into connecting to it instead of to the other, then relay messages between them.

To detect this, an application can run a secondary handshake over one of the connection's ordinary (TLS-protected) streams, authenticating the peer's identity using the exported keying material as a channel-binding value.
If both ends are directly connected by a single TLS connection, they will have a unique shared master secret generated as part of key exchange, and hence export the same keying material.

To prove it, each peer sends its identity public key, along with a signature, made with the matching private key, over the exported keying material.
An attacker can't spoof the signature, because it doesn't have either peer's private key.
While it can forward a peer's original public key and signature, that signature won't verify against the keying material the receiving peer computes for its own connection, and the handshake aborts.

The `label` and `context` parameters let a caller customize the derivation for a particular purpose.
Different combinations of `label`, `context`, and `outputLength` produce distinct, independently-derived output, even though they're all based on the same underlying session secret.

## Examples

### Binding a token to the connection

This example shows how we can use `exportKeyingMaterial()` to create a token that is bound to the connection.

It derives keying material scoped to the application and purpose using the `label`, then uses it as an {{domxref("SubtleCrypto/sign", "HMAC")}} key to sign an application-level `token`.
A server that has access to the same TLS session's exporter (for example, one terminating QUIC/HTTP-3 itself) can perform the equivalent derivation and verify the signature, confirming that `token` was signed for this exact connection.

Note that this only proves that whoever presents `{token, signature}` holds valid keying material for _some_ connection to the server — not who they are.
It stops a captured `{token, signature}` pair from being reused later on an unrelated connection, but it doesn't stop the live-relay attack described above: a MITM that's a genuine endpoint of its own connection to the server can compute its own valid signature over the same `token`.
Defending against that requires signing with a persistent identity key, as described above, instead of a plain HMAC keyed only by the connection's exported material.

```js
const encoder = new TextEncoder();

async function signTokenForConnection(transport, token) {
  try {
    const keyingMaterial = await transport.exportKeyingMaterial(
      encoder.encode("example.com/channel-binding"), // Label
      new Uint8Array(0), // Context (No additional context needed)
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

- {{domxref("WebTransport.getStats()")}}
